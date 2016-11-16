import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import BlogWelcome from '../../ui/pages/BlogWelcome.js'
import BlogLogin from '../../ui/pages/BlogLogin.js'
import BlogWrite from '../../ui/pages/BlogWrite.js'
import BlogReadContainer from '../../ui/containers/BlogReadContainer.js'
import BlogReadEntry from '../../ui/pages/BlogReadEntry.js'

export const routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={BlogWelcome}/>
    <Route path='/blog_login' component={BlogLogin}/>
    <Route path='/blog_read' component={BlogReadContainer}/>
    <Route path='/blog_write' component={BlogWrite}/>
    <Route path='/blog_entry_detail(/:title)(/:text)(/:author)' component={BlogReadEntry}/>
  </Router>
)
