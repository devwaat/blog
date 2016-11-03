import { Meteor } from 'meteor/meteor'
import '../imports/startup/server'

// initial dummy data imports
import { BlogEntries } from '../imports/api/collections.js'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'

Meteor.startup(() => {
  // dummy data
  const data = [
    {
      title: 'Blog entry 5',
      text: 'Text of blog entry 5\n this blog entry contains the word hello \n\n\n\n the end...'
    },
    {
      title: 'Blog entry 4',
      text: 'Text of blog entry 4\n\n\n\n\n the end...'
    },
    {
      title: 'Blog entry 3',
      text: 'Text of blog entry 3\n\n\n\n\n the end...'
    },
    {
      title: 'Blog entry 2',
      text: 'Text of blog entry 2\n\n this blog entry contains the word world\n\n\n the end...'
    },
    {
      title: 'Blog entry 1',
      text: 'Text of blog entry 1\n\n\n\n\n the end...'
    }
  ]

  if (BlogEntries.find().count() === 0) {
    data.forEach((list) => {
      Meteor.call('publishBlogEntry', {title: list.title, text: list.text}, (err, res) => {
        if (err) {
          console.log('error: ' + err)
        } else {
          console.log('success')
        }
      })
    })
  }

  if (Meteor.users.find().fetch().length === 0) {
    let id = Accounts.createUser({username: 'blog-admin', email: 'admin@blog.com', password: 'blog-admin'})
    Roles.addUsersToRoles(id, ['admin'])

    id = Accounts.createUser({username: 'test-user', email: 'test@blog.com', password: 'test-user'})
    Roles.addUsersToRoles(id, ['other'])
  }
})
