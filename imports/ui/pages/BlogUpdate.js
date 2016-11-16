import { Meteor } from 'meteor/meteor'
import React from 'react'
import { BlogSubmitSchema } from '../../api/schemas.js'
import { AutoForm, TextField, LongTextField, SubmitField, BoolField, ErrorsField, ErrorField } from 'uniforms-bootstrap4'
import NavBar from '../components/NavBar.js'
import Button from '../components/Button.js'
import { updateBlogEntry } from '../../api/methods.js'
import { Roles } from 'meteor/alanning:roles'
import { browserHistory } from 'react-router'
import marked from 'marked'
import { Accounts } from 'meteor/accounts-base'

class BlogUpdate extends React.Component {

  constructor (props) {
    super(props)
    this.state = {submitMsg: '',
                  marked: '',
                  title: this.props.params.title,
                  text: this.props.params.text,
                  published: false}
    this.updateBlogEntry = this.updateBlogEntry.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleHome = this.handleHome.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleRead = this.handleRead.bind(this)
  }

  componentWillMount () {
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
      browserHistory.replace('/blog_login')
    }

    marked.setOptions({
      breaks: true
    })
  }

  handleClose () {
    browserHistory.goBack()
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

  handleFormChange (props, state) {
    if (props === 'title') {
      this.setState({title: state})
      return
    }

    if (props === 'text') {
      this.setState({marked: marked(state)})
      this.setState({text: state})
      return
    }

    if (props === 'published') {
      this.setState({published: state})
      return
    }
  }

  updateBlogEntry (doc) {
    if (doc.title && doc.text) {
      updateBlogEntry.call({
        id: this.props.params.id,
        title: doc.title,
        text: doc.text,
        published: doc.published
      }, (err, res) => {
        if (err) {
          this.setState({submitMsg: err.reason})
        } else {
          this.setState({submitMsg: 'Blog entry updated!'})
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
              <h2>Update post</h2>
            </div>
          </div>
        </div>
        <AutoForm schema={BlogSubmitSchema} onChange={this.handleFormChange} validate='onChangeAfterSubmit' onSubmit={(doc) => this.updateBlogEntry(doc)}>
          <TextField name='title' value={this.state.title}/>
          <LongTextField name='text' value={this.state.text}/>
          <h6>Markdown rendering:</h6>
          <div dangerouslySetInnerHTML={{__html: this.state.marked}}></div>
          <BoolField name='published' type='checkbox' value={this.state.published}/>
          <ErrorsField/>
          <SubmitField value='Submit'/>
          <ErrorField name='submitMsg' errorMessage={this.state.submitMsg}/>
        </AutoForm>
        <div className='row footer'>
          <div className='col-md-12'>
            <div className='text-center'>
              <Button className='btn btn-primary' value='Close' onClick={this.handleClose} disabled={false}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BlogUpdate.propTypes = {}

BlogUpdate.defaultProps = {}

export default BlogUpdate
