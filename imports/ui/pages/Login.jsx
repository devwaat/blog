import { Meteor } from 'meteor/meteor'
import React from 'react'

class Login extends React.Component {

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

Login.propTypes = {}

Login.defaultProps = {}

export default Login
