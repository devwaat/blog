import React from 'react'

class TextArea extends React.Component {

  constructor (props) {
    super(props)
    this.state = {value: this.props.value}
    this.handleTab = this.handleTab.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({value: e.target.value})
  }

  handleTab (event) {
    var ref = this.refs['entryText']
    var val = ref.value
    var start = ref.selectionStart
    var end = ref.selectionEnd

    if (event.keyCode === 9) {
      event.preventDefault()
      ref.value = val.substring(0, start) + '\t' + val.substring(end)
      ref.selectionStart = ref.selectionEnd + 1
      return false
    }
  }

  render () {
    return (
      <textarea
        ref='entryText'
        value={this.state.value}
        className={this.props.className}
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        readOnly={this.props.readonly}
        maxLength={this.props.maxlength}
        onBlur={this.props.onBlur}
        onKeyDown={this.handleTab}
        onChange={this.handleChange}
        />
    )
  }
}

TextArea.propTypes = {
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
  readonly: React.PropTypes.bool,
  maxlength: React.PropTypes.bool,
  onBlur: React.PropTypes.func
}

TextArea.defaultProps = {}

export default TextArea
