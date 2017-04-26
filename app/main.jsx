'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Simple  from './components/Simple'

render (
  <Provider store={store}>
    <Simple />
  </Provider>,
  document.getElementById('main')
)