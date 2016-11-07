import { Meteor } from 'meteor/meteor'
import { BlogEntries } from '../collections.js'
import { BlogEntriesPubSchema } from '../schemas.js'

Meteor.publish('blogEntries.public', function (searchVal) {
  BlogEntriesPubSchema.validate({searchVal})

  if (!searchVal) {
    return BlogEntries.find({}, BlogEntries.publicFields)
  } else {
    return BlogEntries.find({$text: {$search: searchVal}},
                            BlogEntries.publicFields)
  }
})
