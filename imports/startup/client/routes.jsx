import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import BlogWelcome from '../../ui/pages/BlogWelcome.jsx'
import BlogLogin from '../../ui/pages/BlogLogin.jsx'
import BlogRead from '../../ui/pages/BlogRead.jsx'

export const routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={BlogWelcome}/>
    <Route path='/blog_login' component={BlogLogin}/>
    <Route path='/blog_read' component={BlogRead}/>
  </Router>
)
