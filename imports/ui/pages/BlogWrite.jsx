import { Meteor } from 'meteor/meteor'
import React from 'react'
import { BlogSubmitSchema } from '../../api/schemas.js'
import { AutoForm, TextField, LongTextField, SubmitField, BoolField, ErrorsField, ErrorField } from 'uniforms-unstyled'
import { publishBlogEntry } from '../../api/methods.js'
import { Roles } from 'meteor/alanning:roles'
import { browserHistory } from 'react-router'

class BlogWrite extends React.Component {

  constructor (props) {
    super(props)
    this.state = {submitMsg: ''}
    this.insertBlogEntry = this.insertBlogEntry.bind(this)
  }

  componentWillMount () {
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
      browserHistory.replace('/blog_login')
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
      <h1>Waat the blog</h1>
        <AutoForm schema={BlogSubmitSchema} validate='onChangeAfterSubmit' onSubmit={(doc) => this.insertBlogEntry(doc)}>
          <TextField name='title'/>
          <LongTextField name='text'/>
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
