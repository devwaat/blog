import { Meteor } from 'meteor/meteor'
import { BlogEntries } from '../imports/api/collections.js'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
import { publishBlogEntry, blogEntriesCount } from '../imports/api/methods.js'

const data = [
  {
    title: 'Lorem Ipsum',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    published: true
  },
  {
    title: 'Italic blog post',
    text: 'This blog post contains * italic * text\n\n\This blog post contains * italic * text\n\n\This blog post contains * italic * text\n\n',
    published: true
  },
  {
    title: 'Bold Blog post',
    text: 'This blog post contains ** bold ** text\n\n\This blog post contains ** bold ** text\n\n\This blog post contains ** bold ** text\n\n',
    published: true
  },
  {
    title: 'Link containing blog entry',
    text: '[I\'m an inline-style link](https://www.google.com)',
    published: true
  },
  {
    title: 'Big and small',
    text: '# BIG \n\n #### small...small...small...',
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
