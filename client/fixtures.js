import { Meteor } from 'meteor/meteor'
import { BlogEntries } from '../imports/api/collections.js'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
import { publishBlogEntry, blogEntriesCount } from '../imports/api/methods.js'

const data = [
  {
    title: 'Blog entry 5',
    text: 'Text of blog entry 5\n this blog entry contains the word hello \n\n\n\n the end...',
    published: true
  },
  {
    title: 'Blog entry 4',
    text: 'Text of blog entry 4\n\n\n\n\n the end...',
    published: true
  },
  {
    title: 'Blog entry 3',
    text: 'Text of blog entry 3\n\n\n\n\n the end...',
    published: true
  },
  {
    title: 'Blog entry 2',
    text: 'Text of blog entry 2\n\n this blog entry contains the word world\n\n\n the end...',
    published: true
  },
  {
    title: 'Blog entry 1',
    text: 'Text of blog entry 1\n\n\n\n\n the end...',
    published: true
  }
]

blogEntriesCount.call({}, (err, res) => {
  if (err) {
    console.log('Error counting blog entries')
  } else {
    if (res === 0) {
      Meteor.loginWithPassword('blog-admin', 'blog-admin', (err) => {
        if (err) {
          console.log('Error logging on dummy data creation: ' + err)
        } else {
          data.forEach((list, i) => {
            publishBlogEntry.call({title: list.title, text: list.text, published: list.published}, (err, res) => {
              if (err) {
                console.log('error: ' + err)
              } else {
                if (i === data.length - 1) {
                  Meteor.logout((err) => {
                    err ? console.log('Error loging out: ' + err) : console.log('Successfully logged out after creating dummy data')
                  })
                  console.log('success')
                }
              }
            })
          })
          console.log('Successfully logged as admin')
        }
      })
    }
  }
})
