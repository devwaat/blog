import '../styling/general.css'
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
        <div className='text-box'>
        <div className='row height1'>
          <div className='col-md-12'>
            <div className='text-center'>
              <h3>{this.props.resizedTitle}</h3>
            </div>
          </div>
        </div>
        <div className='row height2'>
          <div className='col-md-12'>
            <div dangerouslySetInnerHTML={{__html: marked(this.props.resizedText)}}></div>
          </div>
        </div>
        <div className='row height3'>
          <div className='col-md-8'>
            <div className='text-left'>
              <h5>{this.props.author + ' - ' + this.props.date}</h5>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='text-right'>
              <Link className='btn btn-info btn-sm' to={`/blog_entry_detail/${this.props.title}/${encodeURIComponent(this.props.text)}/${this.props.author}`}>Read more</Link>
            </div>
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
