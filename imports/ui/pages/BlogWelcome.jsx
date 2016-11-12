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
    let shareLink = Roles.userIsInRole(Meteor.userId(), 'admin')
      ? <Link className='btn btn-info' to='/blog_write'>Share</Link>
      : <Link className='btn btn-info' to='/blog_login'>Share</Link>
    return (
      <div className='jumbotron'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='text-center'>
              <h1>Waat the blog?</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='text-right'>
              <Link className='btn btn-primary' to='/blog_read'>Read</Link>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='text-left'>
              {shareLink}
              </div>
          </div>
        </div>
      </div>
    )
  }
}

BlogWelcome.propTypes = {}

BlogWelcome.defaultProps = {}

export default BlogWelcome
