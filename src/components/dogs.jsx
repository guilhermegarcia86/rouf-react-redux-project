import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { apiGetDogs, apiDeleteDog, apiEditDog, apiAddDog } from '../actions/api-dogrouf-options'
import { selectDog } from '../actions/dogrouf-actions'
import _ from 'lodash'

import Grid from './dogs-grid'
import Form from './dog-form'

let Dogs = React.createClass({

  getInitialState() {
    return { action: 'LIST' }
  },

  componentDidMount() {
    this.refreshItems()
  },

  refreshItems(idEmpresa) {
    this.props.apiGetDogs()
  },

  onAdd() {
    this.props.selectDog({})
    this.setState({ action: 'CREATE' })
  },

  onEdit(item) {
    this.props.selectDog(item)
    this.setState({ action: 'UPDATE' })
  },

  successCallback(msg) {
    swal(msg, '', 'success')

    this.setState({ action: 'LIST' })
  },

  onSave(model) {
    const data = { model }

    switch (this.state.action) {
      case 'UPDATE': {
        this.props.apiEditDog(data)
        this.successCallback('Editado com sucesso')
        break;
      }
      default: {
        this.props.apiAddDog(data)
        this.successCallback('Adicionado com sucesso')
        break;
      }
    }
  },

  onDelete(model) {
    this.props.apiDeleteDog({ model })

    this.setState({ action: 'LIST' })
  },

  onFormCancel(action) {
    this.setState({ action: action })
  },

  onRowClick(id) {
    if (id) {
      const { dogs } = this.props
      const dog = _.find(dgos, {'id': parseInt(id, 10)})

      this.onEdit(dog)
    }
  },

  onCancel() {
    this.props.onCancel()
  },

  render(){

    const { action } = this.state
    const { dog, dogs } = this.props

    switch (action) {
      case 'UPDATE':
      case 'CREATE': return (
        <Form model={dog}
              initialValues={dog}
              onSave={this.onSave}
              onCancel={this.onFormCancel}
              onDelete={this.onDelete}
              action={action}/>
      )
      default: return (
        <Grid cargos={dogs}
              onAdd={this.onAdd}
              onCancel={this.onCancel}
              onRowClick={this.onRowClick}/>
      )
    }
  }
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ apiGetDogs, apiDeleteDog, selectDog }, dispatch);
}

function mapStateToProps({ dogs }) {
  return { dogs };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dogs);