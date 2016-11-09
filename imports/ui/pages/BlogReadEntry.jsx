// import '../stylesheets/detail.scss'
import { Meteor } from 'meteor/meteor'
import React from 'react'
import Button from '../components/Button.jsx'
import { browserHistory } from 'react-router'
import marked from 'marked'

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
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='text-center'>
              <h2>{this.props.params.title}</h2>
            </div>
          </div>
        </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center'>
                <div dangerouslySetInnerHTML={{__html: marked(this.props.params.text)}}></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center'>
                <div className='detail-author'>{'Author: ' + this.props.params.author}</div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center'>
                <Button className='btn btn-primary' value='Close' onClick={this.handleCloseClick} disabled={false}/>
              </div>
            </div>
          </div>
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
