import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Roles } from 'meteor/alanning:roles'
import { browserHistory } from 'react-router'

class BlogWrite extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
      browserHistory.replace('/blog_login')
    }
  }

  render () {
    return (
      <div>
        <p>you can't write yet</p>
      </div>
    )
  }
}

BlogWrite.propTypes = {}

BlogWrite.defaultProps = {}

export default BlogWrite
