import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Link } from 'react-router'
import { Roles } from 'meteor/alanning:roles'

class BlogWelcome extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let shareLink = Roles.userIsInRole(Meteor.userId(), 'admin') ? <Link to='/blog_write'>Share</Link> : <Link to='/blog_login'>Share</Link>
    return (
      <div>
        <p>Waat the blog?</p>
        <Link to='/blog_read'>Read</Link>
        {shareLink}
      </div>

    )
  }
}

BlogWelcome.propTypes = {}

BlogWelcome.defaultProps = {}

export default BlogWelcome
