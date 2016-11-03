import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const UserLoginSchema = new SimpleSchema({
  username: {
    type: String,
    label: 'Username',
    optional: false,
    min: 6
  },
  password: {
    type: String,
    label: 'Password',
    optional: false,
    min: 6
  },
  showpass: {
    type: Boolean,
    label: 'Show password',
    optional: true
  }
})

export const BlogEntrySchema = new SimpleSchema({
  author: {
    type: String,
    label: 'Author',
    optional: true
  },
  title: {
    type: String,
    label: 'Title',
    optional: false
  },
  text: {
    type: String,
    label: 'Title',
    optional: false
  },
  published: {
    type: Boolean,
    label: 'Published',
    optional: true
  },
  updateDate: {
    type: Date,
    label: 'Last Update',
    optional: true
  }
})

export const BlogEntriesPubSchema = new SimpleSchema({
  limit: {
    type: Number,
    optional: true
  },
  skip: {
    type: Number,
    optional: true
  }
})
