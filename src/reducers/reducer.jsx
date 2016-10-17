import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as Actions from '../actions/dogrouf-actions'
import _ from 'lodash'

const optionsGlobal = (state = [], action) => {
  switch (action.type) {
    case Actions.GET_OPTIONS_GLOBAL: return action.payload
    default: return state
  }
}

const dogs = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_DOG: return _.sortBy([...state, action.payload], 'nome')
    case Actions.EDT_DOG: return _.uniqBy([action.payload, ...state], 'id')
    case Actions.DEL_DOG: return _.without(state, action.payload.model)
    default: return state
  }
}

export default combineReducers({
  optionsGlobal,
  dogs
})