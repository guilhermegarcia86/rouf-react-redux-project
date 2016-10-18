import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const DogCadastro = React.createClass({

    render(){
        return(

            <div>
                
            </div>

        )
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(DogCadastro)