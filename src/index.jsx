import 'index.css'
import React from 'react'
import { render } from 'react-dom'
import { Route, Router, Redirect, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import appStore from './reducers/store'

import App from 'containers/app'
import Home from 'components/home'
import Cadastro from 'components/contacts'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/contacts' component={Cadastro} />
    </Route>
  </Router>
)

render(
  <Provider store={appStore}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app-root')
)
