import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history } from './history'
import AttackDetails from './Views/AttackDetailsView'
import NotFound from './Views/NotFoundView'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/attackDetails' component={AttackDetails} />
          <Route path='/404' component={NotFound} />

          <Redirect from='*' to='/404' />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
