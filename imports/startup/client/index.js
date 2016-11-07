import { Session } from 'meteor/session'
import '../../api/collections.js'
import '../../api/methods.js'

Session.set('blogEntriesLimit', 5)
Session.set('blogEntriesSkip', 0)
Session.set('blogSearch', '')
