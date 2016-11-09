import React from 'react'

class InputText extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <input
        type='text'
        value={this.props.value}
        placeholder={this.props.placeholder}
        className={this.props.className}
        disabled={this.props.disabled}
        readOnly={this.props.readOnly}
        maxLength={this.props.maxLength}
        onBlur={this.props.onBlur}
        onChange={this.props.onChange}
      />
    )
  }
}

InputText.propTypes = {
  className: React.PropTypes.string,
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  readOnly: React.PropTypes.bool,
  maxLength: React.PropTypes.bool,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func
}

InputText.defaultProps = {}

export default InputText
