import { Meteor } from 'meteor/meteor'
import React from 'react'
import { BlogSubmitSchema } from '../../api/schemas.js'
import { AutoForm, TextField, LongTextField, SubmitField, BoolField, ErrorsField, ErrorField } from 'uniforms-bootstrap4'
import NavBar from '../components/NavBar.jsx'
import { publishBlogEntry } from '../../api/methods.js'
import { Roles } from 'meteor/alanning:roles'
import { browserHistory } from 'react-router'
import marked from 'marked'
import { Accounts } from 'meteor/accounts-base'

class BlogWrite extends React.Component {

  constructor (props) {
    super(props)
    this.state = {submitMsg: '', marked: ''}
    this.insertBlogEntry = this.insertBlogEntry.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleHome = this.handleHome.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
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

  handleLogout () {
    Accounts.logout((err) => {
      if (!err) {
        browserHistory.push('/')
      }
    })
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
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-right'>
              <NavBar className='nav nav-pills pull-right' items={[
                {display: 'Home', handleClick: this.handleHome},
                {display: 'Read', handleClick: this.handleRead},
                {display: 'Logout', handleClick: this.handleLogout}
              ]}/>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='text-center'>
              <h2>Post entry</h2>
            </div>
          </div>
        </div>
                <AutoForm schema={BlogSubmitSchema} onChange={this.handleTextChange} validate='onChangeAfterSubmit' onSubmit={(doc) => this.insertBlogEntry(doc)}>
          <TextField name='title'/>
          <LongTextField name='text'/>
          <h6>Markdown rendering:</h6>
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
