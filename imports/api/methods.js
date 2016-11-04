import { Meteor } from 'meteor/meteor'
import { BlogEntries } from '../api/collections.js'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { BlogEntrySchema } from '../api/schemas.js'
import { Roles } from 'meteor/alanning:roles'

export const publishBlogEntry = new ValidatedMethod({
  name: 'publishBlogEntry',
  validate: BlogEntrySchema.validator(),
  run ({title, text, published}) {
    var author
    var now = new Date()

    if (!Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error(null, '\'admin\' role required to publish on blog!')
    }

    author = 'undisclosed' || Meteor.users.findOne({_id: this.userId}, {fields: {username: 1}}).username

    if (BlogEntries.find({title: title, text: text}).count() === 0) {
      BlogEntries.insert({
        author: author,
        title: title,
        text: text,
        published: published,
        creationDate: now,
        updateDate: now
      })
    } else {
      throw new Meteor.Error(null, 'Blog entry already exists!')
    }
  }
})
