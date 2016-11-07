import { Meteor } from 'meteor/meteor'
import '../imports/startup/server/index.js'

// initial dummy import
import './fixtures.js'
// db initialization
import './dbScripts.js'

Meteor.startup(() => {})
