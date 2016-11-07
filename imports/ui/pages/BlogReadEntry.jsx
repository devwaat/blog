// import '../stylesheets/detail.scss'
import { Meteor } from 'meteor/meteor'
import React from 'react'
import Button from '../components/Button.jsx'
import TextArea from '../components/TextArea.jsx'
import { browserHistory } from 'react-router'

class BlogReadEntry extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}

    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  componentWillMount () {
    this.setState({})
  }

  handleCloseClick (e) {
    browserHistory.goBack()
  }

  render () {
    return (
      <div className='detail'>
        <div className='detail-header'>
          <p className='detail-header-title'>{this.props.params.title}</p>
        </div>
        <TextArea className='detail-story' value={this.props.params.text} disabled={true} readOnly={true}/>
        <div className='detail-author'>{'Author: ' + this.props.params.author}</div>
        <Button className='detail-close-button' value='CLOSE' onClick={this.handleCloseClick} disabled={false}/>
      </div>
    )
  }
}

BlogReadEntry.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  author: React.PropTypes.string
}

BlogReadEntry.defaultProps = {
}

export default BlogReadEntry
