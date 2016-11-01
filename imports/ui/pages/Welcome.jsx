import { Meteor } from 'meteor/meteor'
import React from 'react'

class Welcome extends React.Component {

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

Welcome.propTypes = {}

Welcome.defaultProps = {}

export default Welcome
