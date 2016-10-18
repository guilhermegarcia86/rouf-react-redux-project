import React from 'react'
import { Link } from 'react-router'

import { Row, Column, Ibox } from './utils/ui-util'

const displayNone = {'display': 'none'}

const GridLineDetail = React.createClass({
  render() {
    let {indice, item} = this.props
    return (
      <tr id={`linha${indice}`} style={displayNone}>
        <td colSpan="8">
          <table cellPadding="5" cellSpacing="0" border="0" className="table table-hover table-condensed detalhes">
            <tbody>
              <tr>
                <td>Registro</td>
                <td>{item.dadosFuncionais.registro}</td>
                <td>Tipo</td>
                <td>{item.diversos.tipo}</td>
              </tr>
              <tr>
                <td>Turno</td>
                <td>
                  {item.diversos.turno}<br />
                <small className="text-muted"><i>jornada semanal: {item.dadosFuncionais.horasSemanal}</i></small><br />
                <small className="text-muted"><i>jornada mensal: {item.dadosFuncionais.horasMensal}</i></small><br />
                </td>
                <td>Salário</td>
                <td>
                  <LabelHidden
                    valor={item.dadosFuncionais.salario}
                    textoHidden="R$ ********"  />
                </td>
              </tr>
              <tr>
                <td>Sindicato</td>
                <td colSpan="3">{item.diversos.sindicato}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td><a href="mailto:{item.outrosCadastros.dadosEmpresariais.email}">{item.outrosCadastros.dadosEmpresariais.email}</a></td>
                <td>Telefones</td>
                <td>
                  <i className="fa fa-briefcase text-primary" title="comercial" />&nbsp;<a href="tel:{item.foneComercial}">{item.outrosCadastros.dadosEmpresariais.telefoneComercial}</a><br />
                  <i className="fa fa-mobile text-primary fa-lg" title="celular"/>&nbsp;<a href="tel:{item.foneCelular}">{item.dadosPessoais.telefoneCelular}</a><br />
                  <i className="fa fa-home text-primary" title="residencial"/>&nbsp;<a href="tel:{item.foneResidencia}">{item.dadosPessoais.telefoneResidencial}</a><br />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    )
  }
})

const GridLine = React.createClass({
  onClickShow(e) {
    e.preventDefault()
    let classes = e.target.classList
    let attr = e.target.getAttribute('data-ref')
    let element = document.getElementById(attr)
    if (_.find(classes, function(item) { return item == 'btn-danger' })) {
      classes.remove('btn-danger')
      classes.remove('fa-minus')
      classes.add('btn-success')
      classes.add('fa-plus')
      element.style.display = 'none'
    } else {
      classes.remove('btn-success')
      classes.remove('fa-plus')
      classes.add('btn-danger')
      classes.add('fa-minus')
      element.style.display = ''
    }
  },

  render() {
    const {item, indice, demitidos} = this.props

    return (
      <tr role='row' className={((indice%2)==1)?'odd':'even'}>
        <td>
          <i className='fa fa-plus btn-success control'
            data-ref={`linha${indice}`}
            onClick={this.onClickShow} ></i>
        </td>
        <td>
          <FotoFuncionario funcionario={item} />
        </td>
        <td className="sorting_1">{item.dadosPessoais.nome}<br/><small className="text-muted"><i>{item.dadosPessoais.apelido}</i></small></td>
        <td>{item.dadosFuncionais.dataAdmissao}</td>
        <td>{item.diversos.cargo}</td>
        <td>{item.diversos.centroCusto}</td>
        <td>
          {!demitidos &&
            <SituacaoFuncionario funcionario={item} />
          }
          {demitidos &&
            <span>{item.dataQuitacao}</span>
          }
        </td>
        <td className="text-center">
          <Link
            title="Selecionar funcionário"
            to={`funcionario/${item.idFuncionario}/cadastro`}
            className="btn btn-default txt-color-blue">
            <i className="fa fa-search" />
          </Link>
        </td>
      </tr>
    )
  }
})

const GridBody = React.createClass({
  renderList() {
    let elements = [],
        items = this.props.items || []
    const { demitidos } = this.props
    items.forEach((item, idx) => {
      elements.push(<GridLine key={`${idx}-1`} item={item} indice={idx} demitidos={demitidos}/>)
      elements.push(<GridLineDetail key={`${idx}-2`} item={item} indice={idx} demitidos={demitidos}/>)
    })
    return elements
  },

  render() {
    return (
      <tbody>{this.renderList()}</tbody>
    )
  }
})

let DogGrid = ({ model, demitidos, handleAtivosChange }) => {
  const orderedItems = _.sortBy(model, {dadosPessoais: 'nome'})

  return (
    <Ibox title='Funcionários' hasFooter={false}>
      <section id="widget-grid">
        <div className="row smart-form ativo-demitido">
          <label className="toggle">
            <input
              type="checkbox"
              defaultChecked={true}
              onChange={e => {e.persist(); handleAtivosChange(!e.target.checked)}}/>
            <i data-swchon-text="Ativos" data-swchoff-text="Demitidos"></i>
          </label>
        </div>
        <div className="row">
          <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="jarviswidget well">
              <div>
                <div className="widget-body no-padding">
                  <table id="example" className="display projects-table table table-striped table-bordered table-hover table-funcionarios" cellSpacing="0" width="100%">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Funcionário</th>
                        <th>Admissão</th>
                        <th>Cargo</th>
                        <th>C. Custo</th>
                        <th>{demitidos ? 'Data demissão' : 'Situação'}</th>
                        <th></th>
                      </tr>
                    </thead>
                    <GridBody items={model} demitidos={demitidos}/>
                  </table>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="row">
          <div className="col-sm-12">
          </div>
        </div>
      </section>
    </Ibox>
  )
}

export default DogGrid;
