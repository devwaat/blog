import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import BlogWelcome from '../../ui/pages/BlogWelcome.jsx'
import BlogLogin from '../../ui/pages/BlogLogin.jsx'
import BlogWrite from '../../ui/pages/BlogWrite.jsx'
import BlogReadContainer from '../../ui/containers/BlogReadContainer.jsx'

export const routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={BlogWelcome}/>
    <Route path='/blog_login' component={BlogLogin}/>
    <Route path='/blog_read' component={BlogReadContainer}/>
    <Route path='/blog_write' component={BlogWrite}/>
  </Router>
)
