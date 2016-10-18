import 'index.css'
import React from 'react'
import { render } from 'react-dom'
import { Route, Router, Redirect, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import appStore from './reducers/store'

import Layout from './components/layout/layout'
import DogCadastro from 'components/dog-cadastro'
import Dogs from 'components/dogs'

const routes = (
  <Route>
    <Route path='/' component={Layout} >
      <Redirect from='/' to='/pesquisar'/>
      <Route path='cadastro' component={DogCadastro} />
      <Route path='pesquisar' component={Dogs} />
     </Route>
  </Route>
)

render(
  <Provider store={appStore}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app-root')
)
