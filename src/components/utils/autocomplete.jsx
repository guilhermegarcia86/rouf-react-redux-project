import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

let Autocomplete = React.createClass({
  getDefaultProps() {
    return {
      label: 'Busca',
      searchParam: 'pesquisa',
      params: {},
      initialLabel: ''
    }
  },

  getInitialState() {
    return {
      items: [],
      show: false,
      labelSelected: ''
    }
  },

  componentDidMount () {
      const { initialLabel } = this.props

      if(initialLabel) {
        this.refs.input.value = initialLabel
        this.setState({labelSelected: initialLabel})
      }
  },

  componentWillMount () {
      document.addEventListener('click', this.handleOutsideClick, false);
  },

  componentWillUnmount () {
      document.removeEventListener('click', this.handleOutsideClick, false);
  },

  /**
   * Limpa o input caso o usuário tenha clicado fora do componente sem selecionar nenhum item
   */
  handleOutsideClick(e) {
    const { field } = this.props
    const { input } = this.refs

    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      let labelOnEvent = input.value

      if(!field.value || labelOnEvent != this.state.labelSelected) {
        input.value = ''
        labelOnEvent = ''
        field.onChange(null)
      }

      this.setState({show: false, labelSelected: labelOnEvent})
    }
  },

  /**
   * Executa a pesquisa por itens no servidor através de um serviço REST
   * ou buscando na lista de itens passada como props: 'itemList'
   */
  __executeSearch(value = "") {
    const { service, searchParam, itemList, labelKeys, params} = this.props

    // Executa pesquisa via serviço REST
    if(service) {
      let finalUrl = `api/v1/${service}?${searchParam}=${value}`

      // Coloca parâmetros adicionais na url
      _.forOwn(params, function(value, key) {
        if(value.constructor === Array) {
            value.forEach(function(v) {
              finalUrl += `&${key}=${v}`
            })
        } else {
          finalUrl += `&${key}=${value}`
        }
      })

      axios.get(finalUrl).then(function(response) {
        this.setState({items: response.data.data, show: true})
      }.bind(this));
    } else if(itemList) {
      // Executa pesquisa na lista de items passada como props
      const resultList = _.filter(itemList, function(i) {
        let match = false

        labelKeys.forEach(function(l) {
          if(i[l].toUpperCase().indexOf(value.toUpperCase()) >= 0) {
            match = true
          }
        })

        return match
      })

      this.setState({items: resultList, show: true})

    } else {
        throw 'E preciso especificar propriedade "service" ou "itemList" ao componente Autocomplete'
    }
  },

  handleSearch(e) {
    const { value } = e.target
    this.timer

    if(this.timer) {
      clearTimeout(this.timer)
    }

    this.timer = setTimeout(function() {
        this.__executeSearch(value)
    }.bind(this), 500)
  },

  /**
   * Lida com o clique na setinha à direita
   */
  handleClickSearch() {
    if(!this.props.disabled) {
      this.__executeSearch('')
    }
  },

  /**
   * Lida com a seleção de um item da lista
   */
  handleItemSelect(e) {
    const { idKey, field, onSelect } = this.props
    const idValue = e.target.getAttribute('data-id'),
      model = this.__findItem(idKey, idValue),
      labelSelected = this.__getLabel(model)

    this.setState({show: false, labelSelected })
    this.refs.input.value = labelSelected

    field.onChange(model[idKey])

    // Executa callback passado como 'props'
    if(onSelect) {
      onSelect(model)
    }
  },

  /**
   * Encontra o objeto de um item baseado em seu id
   * @param idKey o nome da chave que representa o id do item
   * @param idValue o valor do id do item sendo procurado
   * @return objeto representando o item encontrado
   */
  __findItem(idKey, idValue) {
    return _.find(this.state.items, function(o) { return o[idKey] == idValue })
  },

  /**
   * Monta a label de um item
   * @param model objeto representando o item
   * @return uma string representando a label do item
   */
  __getLabel(model) {
    const { labelKeys, mainLabel } = this.props

    if(mainLabel) {
      return model[mainLabel]
    } else {
      let finalLabel = ''
      labelKeys.forEach(function(l) {
        finalLabel += model[l] + ' '
      })

      return finalLabel.substring(0, finalLabel.length - 1)
    }
  },

  renderList() {
    const { labelKeys, idKey } = this.props
    const { handleItemSelect } = this
    const { show } = this.state

    return (
      <div className={'results ' + (show ? 'show' : '') }>
        <table ref="itemsTable">
          <tbody>
          {this.state.items.map(function(item) {
            return (
              <tr data-id={item[idKey]} onClick={handleItemSelect} key={item[idKey]}>
                {labelKeys.map(function(l, i) {
                  return <td data-id={item[idKey]} key={item[idKey] + '_' + i}>{item[l]}</td>
                })}
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  },

  /**
   * Lida com a navegação nos itens usando as setas do teclado, e a seleção
   * de um item através da tecla 'Enter'
   */
  handleKeyDown(e) {
    let rows = Array.prototype.slice.call(this.refs.itemsTable.getElementsByTagName('tr'))

    if(rows.length == 0) {
      return;
    }

    let active = this.refs.itemsTable.getElementsByClassName('hover')[0]
    let index = rows.indexOf(active)

    if(active) {
      active.className = ''
    }

    if(e.key == 'ArrowUp' && index > 0) {
      e.preventDefault()
      rows[index - 1].className = 'hover'
    } else if(e.key == 'ArrowDown' && index < rows.length - 1) {
      e.preventDefault()
      rows[index + 1].className = 'hover'
    } else if(e.key == 'Enter' && active) {
      e.preventDefault()
      active.click()
    }
  },

  render() {
    const { field, disabled } = this.props
    return (
      <label className="input autocomplete" onKeyDown={this.handleKeyDown} >
        <i className="icon-prepend fa fa-search"></i>
        <input type="text"
            onChange={this.handleSearch}
            placeholder={this.props.label}
            ref="input"
            disabled={disabled}/>
        <input type="hidden" {...field} />
        <i onClick={this.handleClickSearch} className="icon-append fa fa-sort-down"></i>
        {this.renderList()}
      </label>
    )
  }
})

Autocomplete.propTypes = {
  service: PropTypes.string,
  searchParam: PropTypes.string,
  items: PropTypes.array,
  label: PropTypes.string.isRequired,
  labelKeys: PropTypes.array.isRequired,
  idKey: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired
}


export default Autocomplete