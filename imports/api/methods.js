import { Meteor } from 'meteor/meteor'
import { BlogEntries } from '../api/collections.js'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { BlogEntrySchema } from '../api/schemas.js'

export const publishBlogEntry = new ValidatedMethod({
  name: 'publishBlogEntry',
  validate: BlogEntrySchema.validator(),
  run ({title, text}) {
    var author
    var now = new Date()

    // if (!this.userI) {
    //   throw new Meteor.Error('publishBlogEntry.userId', 'Please log in...')
    // }

    // CHECK ROLES PACKAGE TO ALLOW ONLY ADMIN USERS TO PUBLISH IN BLOG (alanning:roles)

    author = 'undefined' || Meteor.users.findOne({_id: this.userId}, {fields: {username: 1}}).username

    BlogEntries.insert({
      author: author,
      title: title,
      text: text,
      published: false,
      creationDate: now,
      updateDate: now
    })
  }
})
