import { Mongo } from 'meteor/mongo'

export const BlogEntries = new Mongo.Collection('blogEntries')

BlogEntries.publicFields = {
  author: 1,
  title: 1,
  text: 1,
  published: 1,
  updateDate: 1
}
