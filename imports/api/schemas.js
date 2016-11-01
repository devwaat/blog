import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const UserLoginSchema = new SimpleSchema({
  username: {
    type: String,
    label: 'Username',
    optional: false
  },
  password: {
    type: String,
    label: 'Password',
    optional: false
  }
})
