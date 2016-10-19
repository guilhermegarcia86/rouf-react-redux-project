import React from 'react'
import { Link } from 'react-router'

import { Row, Column, Ibox } from './utils/ui-util'

const displayNone = {'display': 'none'}

const GridLine = React.createClass({
  onClickShow(e) {
    e.preventDefault()
    
  },

  render() {
    const {item, indice} = this.props

    return (
      <tr role='row' className={((indice%2)==1)?'odd':'even'}>
        <td>
          <FotoDog dog={item} />
        </td>
        <td className="sorting_1">{item.dadosDog.nome}<br/><small className="text-muted"><i>{item.dadosPessoais.apelido}</i></small></td>
        <td>{item.dadosDog.raca}</td>
        <td>{item.dadosDog.status}</td>
        <td>{item.dadosDog.idade}</td>
      </tr>
    )
  }
})

const GridBody = React.createClass({
  renderList() {
    let elements = [],
        items = this.props.items || []
    items.forEach((item, idx) => {
      elements.push(<GridLine key={`${idx}-1`} item={item} indice={idx} />)
    })
    return elements
  },

  render() {
    return (
      <tbody>{this.renderList()}</tbody>
    )
  }
})

let DogGrid = ({ model }) => {
  const orderedItems = _.sortBy(model, {dadosPessoais: 'nome'})

  return (
    <Ibox title='Dogs' hasFooter={false}>
      <section id="">
        <div className="">
          <article className="">
            <div className="">
              <div>
                <div className="">
                  <table id="example" className="" cellSpacing="0" width="100%">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Nome</th>
                        <th>Raça</th>
                        <th>Status</th>
                        <th>Idade</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Ibox>
  )
}

export default DogGrid;
