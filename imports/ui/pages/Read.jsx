import { Meteor } from 'meteor/meteor'
import React from 'react'

class Read extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <p>you can't read yet</p>
      </div>
    )
  }
}

Read.propTypes = {}

Read.defaultProps = {}

export default Read
