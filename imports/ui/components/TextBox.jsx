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
        <div className='stories-feed-stories-story-title-box'>
          <p className='stories-feed-stories-story-title-box-title' disabled={true} readOnly={true}>{this.props.resizedTitle}</p>
        </div>
        <div className='stories-feed-stories-story-text' dangerouslySetInnerHTML={{__html: marked(this.props.resizedText)}}></div>
        <div className='stories-feed-stories-story-footer'>
          <div className='stories-feed-stories-story-footer-context'>{this.props.author + ' - ' + this.props.date}</div>
          <Link className='stories-feed-stories-story-footer-read' to={`/blog_entry_detail/${this.props.title}/${this.props.text}/${this.props.author}`}>Read more</Link>
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
