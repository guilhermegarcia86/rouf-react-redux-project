import React from 'react'
import { reduxForm } from 'redux-form'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Dogs = React.createClass({



})

function mapDispatchToProps(dispatch) {
  let actions = { apiAddDog }
  return bindActionCreators(actions, dispatch)
}

function mapStateToProps(state) {
  return {
    optionsGlobal: state.optionsGlobal
  }
}

function mapDispatchToProps(dispatch) {
  let actions = {
    apiGetCCustos: apiGetHistoricoCCustos,
    apiDelCCusto:  apiRemoveHistoricoCCusto,
    getCCustos:    obterHistoricoCCustos
  }
  return bindActionCreators(actions, dispatch)
}

function mapStateToProps(state) {
  return {
    funcionario: state.funcionario,
    historicoCCustos: state.historicoCCustos,
    optionsEmpresa: state.optionsEmpresa
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dogs)