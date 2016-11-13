import { Meteor } from 'meteor/meteor'
import { BlogEntries } from '../api/collections.js'
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter'

// Disable client side update
BlogEntries.deny({
  insert () { return true },
  update () { return true },
  remove () { return true }
})

// Rate limit per connection ID
let publishRule = {
  userId: function (userId) {
    return Meteor.users.findOne(userId)
  },
  type: 'method',
  name: 'publishBlogEntry'
}

// Only allow 5 list operations per connection per second
DDPRateLimiter.addRule(publishRule, 5, 1000)
