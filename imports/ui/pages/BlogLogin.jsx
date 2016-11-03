import { Meteor } from 'meteor/meteor'
import React from 'react'
import { UserLoginSchema } from '../../api/schemas.js'
import { AutoForm, TextField, SubmitField, BoolField, ErrorsField } from 'uniforms-unstyled'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
import { browserHistory } from 'react-router'

class BlogLogin extends React.Component {

  constructor (props) {
    super(props)
    this.state = {showPass: false}
    this.username = ''
    this.password = ''
    this.usernameBlur = this.usernameBlur.bind(this)
    this.passwordBlur = this.passwordBlur.bind(this)
    this.toggleShowPass = this.toggleShowPass.bind(this)
    this.loginWithPassword = this.loginWithPassword.bind(this)
  }

  usernameBlur (event) {
    this.username = event.target.value
  }

  passwordBlur (event) {
    this.password = event.target.value
  }

  toggleShowPass (event) {
    this.setState({showPass: event.target.checked})
  }

  loginWithPassword () {
    if (this.username !== '' && this.password !== '') {
      Meteor.loginWithPassword(this.username, this.password, (err) => {
        if (err) {
          console.log(err.reason)
        } else {
          Roles.userIsInRole(Meteor.userId(), 'admin') ? browserHistory.push('/blog_write') : console.log('\'ADMIN\' profile required to publish on blog')
        }
      })
    }
  }

  render () {
    return (
      <div>
        <h1> Hello </h1>
        <AutoForm schema={UserLoginSchema} validate='onChangeAfterSubmit'>
          <TextField name='username' onBlur={this.usernameBlur}/>
          <TextField name='password' onBlur={this.passwordBlur} type={this.state.showPass ? 'text' : 'password'}/>
          <BoolField name='showpass' type='checkbox' onClick={this.toggleShowPass}>Show password</BoolField>
          <ErrorsField/>
          <SubmitField value='Login' onClick={this.loginWithPassword}/>
        </AutoForm>
      </div>
    )
  }
}

BlogLogin.propTypes = {}

BlogLogin.defaulProps = {}

export default BlogLogin

