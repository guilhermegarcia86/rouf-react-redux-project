import { createStore, applyMiddleware } from 'redux'
import { asyncActionMiddleware } from 'redux-action-helper'
import appReducer from './reducer'

let createStoreWithMiddleware = applyMiddleware(asyncActionMiddleware)(createStore)
const appStore = createStoreWithMiddleware(appReducer)

export default appStore