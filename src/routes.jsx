import { Router, Route, IndexRoute, hashHistory } from 'react-router'
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

export default routes
