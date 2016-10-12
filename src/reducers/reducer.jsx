import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as Actions from '../actions/dogrouf-actions'

const optionsGlobal = (state = [], action) => {
  switch (action.type) {
    case Actions.GET_OPTIONS_GLOBAL: return action.payload
    default: return state
  }
}

export default combineReducers({
  optionsGlobal
})