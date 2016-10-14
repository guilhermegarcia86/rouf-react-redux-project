import 'index.css'
import React from 'react'
import { render } from 'react-dom'
import { Route, Router, Redirect, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import appStore from './reducers/store'

import Layout from './components/layout/layout'
import DogContainer from 'components/dog-container'
import DogCadastro from 'components/dog-cadastro'
import Dogs from 'components/dogs'

const routes = (
  <Route>
    <Route path='/' component={Layout} >
      <Redirect from='/' to='/rouf'/>

      <Route path='dog/cadastro' component={DogCadastro} />

      <Route path='dog/pesquisar' component={Dogs} />

     </Route>
  </Route>
)

render(
  <Provider store={appStore}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app-root')
)
