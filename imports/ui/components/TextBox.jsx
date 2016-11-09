import React from 'react'
import { Link } from 'react-router'
import marked from 'marked'

class TextBox extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={this.props.className}>
        <div className='row'>
          <div className='col-md-3'>
            <div className='text-center'>
              <h3>{this.props.resizedTitle}</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <div dangerouslySetInnerHTML={{__html: marked(this.props.resizedText)}}></div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2'>
            <div className='text-left'>
              <h5>{this.props.author + ' - ' + this.props.date}</h5>
            </div>
          </div>
          <div className='col-md-1'>
            <div className='text-right'>
              <Link className='btn btn-info btn-xs' to={`/blog_entry_detail/${this.props.title}/${this.props.text}/${this.props.author}`}>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TextBox.propTypes = {
  className: React.PropTypes.string,
  author: React.PropTypes.string,
  title: React.PropTypes.string,
  resizedTitle: React.PropTypes.string,
  text: React.PropTypes.string,
  resizedText: React.PropTypes.string,
  date: React.PropTypes.string

}

TextBox.defaultProps = {}

export default TextBox
