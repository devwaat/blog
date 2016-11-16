import '../styling/general.css'
import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Link } from 'react-router'
import { Roles } from 'meteor/alanning:roles'
import { browserHistory } from 'react-router'
import marked from 'marked'

class TextBox extends React.Component {

  constructor (props) {
    super(props)
    this.state = {canUpdate: false}
  }

  componentWillMount () {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      this.setState({canUpdate: true})
    }
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
          <div className='col-md-4'>
            <div className='text-left'>
              <h6>{this.props.author + ' ' + this.props.date}</h6>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='text-right'>
              {this.state.canUpdate ? <Link className='btn btn-info btn-xs' to={`/blog_update/${this.props.id}/${this.props.title}/${encodeURIComponent(this.props.text)}/${this.props.published}`}>Update</Link> : null}
              <Link className='btn btn-info btn-xs' to={`/blog_entry_detail/${this.props.title}/${encodeURIComponent(this.props.text)}/${this.props.author}`}>Read more</Link>
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
  id: React.PropTypes.string,
  author: React.PropTypes.string,
  title: React.PropTypes.string,
  resizedTitle: React.PropTypes.string,
  text: React.PropTypes.string,
  resizedText: React.PropTypes.string,
  published: React.PropTypes.bool,
  date: React.PropTypes.string
}

TextBox.defaultProps = {}

export default TextBox
