import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import BlogRead from '../pages/BlogRead.js'
import { BlogEntries } from '../../api/collections.js'
import { Session } from 'meteor/session'

export default createContainer(() => {
  let blogEntries = []
  let blogHandle = Meteor.subscribe('blogEntries.public', Session.get('blogSearch'))
  let cursor

  let options = {
    fields: BlogEntries.publicFields,
    sort: {updateDate: -1},
    limit: Session.get('blogEntriesLimit'),
    skip: Session.get('blogEntriesSkip')
  }
  if (blogHandle.ready()) {
    cursor = BlogEntries.find({}, options)
    blogEntries = cursor.fetch()
  }

  return {blogEntries}
}, BlogRead)
