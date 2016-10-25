import React from 'react'
import { Link } from 'react-router'

import { Row, Column, Ibox } from './utils/ui-util'

const displayNone = {'display': 'none'}

const GridItem = React.createClass({

  onRowClick() {
     this.props.onEdit(this.props.item)
  },

  onDelete() {
    this.props.onDelete(this.props.item)
  },

  renderButton(disabled) {

    let classes = 'btn btn-xs btn-danger'
    return disabled
      ? <button type='button' className={classes} disabled><i className='fa fa-times'/></button>
      : <button type='button' className={classes} onClick={() => {this.onDelete()}}><i className='fa fa-times'/></button>
  },

  render() {
    let {item, onRowClick} = this.props
    return (
      <tr className={item.id %2 !== 0 ? 'info' : ''}>
        <td className="text-center">{item.nome}</td>
        <td className="text-center">{item.raca}</td>
        <td className="text-center">{item.condicao}</td>
        <td className="text-center">{item.idade}</td>
        <td className="text-center">
          <Link
            title="Editar"
            to={``}
            className="btn btn-link btn-xs">
            <i className="glyphicon glyphicon-pencil" />
          </Link>
          <Link
            title="Excluir"
            to={``}
            className="btn btn-link btn-xs">
            <i className="glyphicon glyphicon-remove" />
          </Link>
        </td>
      </tr>
    )
  }
})

const GridItems = ({items}) => {
  return (
    <tbody>
      {items.map((item) => {
         return <GridItem item={item} key={item.id} />
      })}
    </tbody>
  )
}

let DogGrid = ({ model }) => {

  return (
    <Ibox title='Dogs' hasFooter={false}>
      <section id="conteudo-grid">
        <div className="container">
            <div className="panel">
                <div className="">
                  <table id="table-grid" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th className="text-center col-md-2">Nome</th>
                        <th className="text-center col-md-2">Raça</th>
                        <th className="text-center col-md-2">Status</th>
                        <th className="text-center col-md-2">Idade</th>
                        <th className="text-center col-md-1"></th>
                      </tr>
                    </thead>
                    <GridItems items={model} />
                  </table>
              </div>
            </div>
        </div>
      </section>
    </Ibox>
  )
}

export default DogGrid;
