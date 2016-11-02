import { Meteor } from 'meteor/meteor'
import { BlogEntries } from '../collections.js'
import { BlogEntriesPubSchema } from '../schemas.js'

Meteor.publish('blogEntries.public', function (limit, skip) {
  BlogEntriesPubSchema.validate({limit, skip})

  const options = {
    fields: BlogEntries.publicFields,
    sort: {updatedate: -1},
    limit: limit,
    skip: skip
  }
  // check published field on find selector!
  return BlogEntries.find({}, options)
})
