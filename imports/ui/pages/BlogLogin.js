import { Meteor } from 'meteor/meteor'
import React from 'react'
import { UserLoginSchema } from '../../api/schemas.js'
import { AutoForm, TextField, SubmitField, BoolField, ErrorsField, ErrorField } from 'uniforms-bootstrap4'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
import { browserHistory } from 'react-router'

class BlogLogin extends React.Component {

  constructor (props) {
    super(props)
    this.state = {showPass: false, submitErr: ''}
    this.toggleShowPass = this.toggleShowPass.bind(this)
    this.loginWithPassword = this.loginWithPassword.bind(this)
  }

  toggleShowPass (event) {
    this.setState({showPass: event})
  }

  loginWithPassword (doc) {
    if (doc.username && doc.password) {
      Meteor.loginWithPassword(doc.username, doc.password, (err) => {
        if (err) {
          this.setState({submitErr: err.reason})
        } else {
          Roles.userIsInRole(Meteor.userId(), 'admin') ? browserHistory.replace('/blog_write') : this.setState({submitErr: '\'admin\' profile required to publish on blog'})
        }
      })
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='text-center'>
              <h2>Please login...</h2>
            </div>
          </div>
        </div>
        <AutoForm schema={UserLoginSchema} validate='onChangeAfterSubmit' onSubmit={doc => this.loginWithPassword(doc)}>
          <TextField name='username'/>
          <TextField name='password' type={this.state.showPass ? 'text' : 'password'}/>
          <BoolField name='showpass' type='checkbox' value={this.state.showPass} onChange={this.toggleShowPass}>Show password</BoolField>
          <ErrorsField/>
          <SubmitField value='Login'/>
          <ErrorField name='submitErr' errorMessage={this.state.submitErr}/>
        </AutoForm>
      </div>
    )
  }
}

BlogLogin.propTypes = {}

BlogLogin.defaulProps = {}

export default BlogLogin

