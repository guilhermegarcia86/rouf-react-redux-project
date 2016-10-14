import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import Autocomplete from './utils/autocomplete'

const DogContainer = React.createClass({

    render(){
        return(

            <div>
                <Autocomplete 
                    label="Busca por nome ou raça"
                    service={`dogs`}
                    labelKeys={["nome", "apelido", "raca"]}
                    idKey="idDog"
                    mainLabel="nome"
                    onSelect={this.handleVerbaSelect}
                    field={idDog}
                    ref="dogAutocomplete"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DogContainer);