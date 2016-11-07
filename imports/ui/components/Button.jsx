import React from 'react'

class Button extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <input
        type='button'
        value={this.props.value}
        className={this.props.className}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      />
    )
  }
}

Button.propTypes = {
  className: React.PropTypes.string,
  value: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired
}

Button.defaultProps = {}

export default Button
