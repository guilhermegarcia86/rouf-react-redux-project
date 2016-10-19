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
    let {item, idx, onRowClick} = this.props
    return (
      <tr className={'success'}>
        <td></td>
        <td></td>
        <td>{item.nome}</td>
        <td>{item.raca}</td>
        <td>{item.condicao}</td>
        <td>{item.idade}</td>
      </tr>
    )
  }
})

const GridItems = ({items}) => {
  return (
    <tbody>
      {items.map((item, idx) => {
         return <GridItem item={item} key={idx} />
      })}
    </tbody>
  )
}

let DogGrid = ({ model }) => {

  let orderedItems = _.orderBy(model, 'nome');

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
                    <GridItems items={orderedItems} />
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
