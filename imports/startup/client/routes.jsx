import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Welcome from '../../ui/pages/Welcome.jsx'
import Login from '../../ui/pages/Login.jsx'
import Read from '../../ui/pages/Read.jsx'

export const routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Welcome}/>
    <Route path='/login' component={Login}/>
    <Route path='/read' component={Read}/>
  </Router>
)
