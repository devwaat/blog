import { Meteor } from 'meteor/meteor'
import {BlogEntries} from '../imports/api/collections.js'

// text search index
BlogEntries._ensureIndex({
  'text': 'text'
})

