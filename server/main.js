import { Meteor } from 'meteor/meteor'
import '../imports/startup/server'

// initial dummy data
import { BlogEntries } from '../imports/api/collections.js'

Meteor.startup(() => {
  // dummy data
  const data = [
    {
      title: 'Blog entry 5',
      text: 'Text of blog entry 5\n\n\n\n\n the end...'
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
      text: 'Text of blog entry 2\n\n\n\n\n the end...'
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
})
