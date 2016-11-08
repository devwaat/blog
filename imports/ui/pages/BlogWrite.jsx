import { Meteor } from 'meteor/meteor'
import React from 'react'
import { BlogSubmitSchema } from '../../api/schemas.js'
import { AutoForm, TextField, LongTextField, SubmitField, BoolField, ErrorsField, ErrorField } from 'uniforms-unstyled'
import NavBar from '../components/NavBar.jsx'
import { publishBlogEntry } from '../../api/methods.js'
import { Roles } from 'meteor/alanning:roles'
import { browserHistory } from 'react-router'
import marked from 'marked'

class BlogWrite extends React.Component {

  constructor (props) {
    super(props)
    this.state = {submitMsg: '', marked: ''}
    this.insertBlogEntry = this.insertBlogEntry.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleHome = this.handleHome.bind(this)
    this.handleRead = this.handleRead.bind(this)
  }

  componentWillMount () {
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
      browserHistory.replace('/blog_login')
    }
  }

  handleHome () {
    browserHistory.push('/')
  }

  handleRead () {
    browserHistory.push('/blog_read')
  }

  handleTextChange (props, state) {
    if (props === 'text' && state) {
      this.setState({marked: marked(state)})
      return
    }
    if (props === 'text' && !state) {
      this.setState({marked: ''})
    }
  }

  insertBlogEntry (doc) {
    if (doc.title && doc.text) {
      publishBlogEntry.call({
        title: doc.title,
        text: doc.text,
        published: doc.published || false
      }, (err, res) => {
        if (err) {
          this.setState({submitMsg: err.reason})
        } else {
          this.setState({submitMsg: 'Blog entry submitted!'})
        }
      })
    }
  }

  render () {
    return (
      <div>
      <h1>Post entry</h1>
      <NavBar className='stories-feed-menu-bar' items={[
        {className: 'stories-feed-menu-bar-home', display: 'Home', handleClick: this.handleHome},
        {className: 'stories-feed-menu-bar-user', display: 'Read', handleClick: this.handleRead}
      ]}/>
      <AutoForm schema={BlogSubmitSchema} onChange={this.handleTextChange} validate='onChangeAfterSubmit' onSubmit={(doc) => this.insertBlogEntry(doc)}>
          <TextField name='title'/>
          <LongTextField name='text'/>
          <div dangerouslySetInnerHTML={{__html: this.state.marked}}></div>
          <BoolField name='published' type='checkbox'/>
          <ErrorsField/>
          <SubmitField value='Submit'/>
          <ErrorField name='submitMsg' errorMessage={this.state.submitMsg}/>
          </AutoForm>
      </div>
    )
  }
}

BlogWrite.propTypes = {}

BlogWrite.defaultProps = {}

export default BlogWrite
