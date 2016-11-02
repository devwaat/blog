import { Meteor } from 'meteor/meteor'
import React from 'react'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
// import { BaseForm } from 'uniforms-unstyled'

class BlogLogin extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <p>you can't enter yet</p>
      </div>
    )
  }
}

BlogLogin.propTypes = {}

BlogLogin.defaultProps = {}

export default BlogLogin
