import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'

// dummy user data creation
if (Meteor.users.find().fetch().length === 0) {
  let id = Accounts.createUser({username: 'blog-admin', email: 'admin@blog.com', password: 'blog-admin'})
  Roles.addUsersToRoles(id, ['admin'])

  id = Accounts.createUser({username: 'test-user', email: 'test@blog.com', password: 'test-user'})
  Roles.addUsersToRoles(id, ['other'])
  console.log('Users created!')
}
