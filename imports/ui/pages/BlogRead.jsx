import { Meteor } from 'meteor/meteor'
import React from 'react'

class BlogRead extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    console.log(this.props.blogEntries)
    return (
      <div>
        <p>you can't read yet</p>
      </div>
    )
  }
}

BlogRead.propTypes = {}

BlogRead.defaultProps = {}

export default BlogRead
