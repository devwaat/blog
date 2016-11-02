import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { routes } from '../imports/startup/client/routes.jsx'

import '../imports/startup/client/index.js'

Meteor.startup(() => {
  render(routes(), document.getElementById('render-app'))
})

