import { Meteor } from 'meteor/meteor'
import React from 'react'

class BlogWelcome extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <p>this is not a blog... yet</p>
      </div>
    )
  }
}

BlogWelcome.propTypes = {}

BlogWelcome.defaultProps = {}

export default BlogWelcome
