import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Welcome from '../../ui/pages/Welcome.jsx'

export const routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Welcome}/>
  </Router>
)
