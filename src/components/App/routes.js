
import React from 'react'
import { Route, Switch } from 'react-router'

import requireAuth from 'containers/Auth'
import Login from 'containers/Auth/Login'
import Tabs from 'containers/Tabs'
import Protected from 'components/Protected'
import NotFound from '../NotFound'

export default () => (
  <Switch>
    <Route path='/' exact component={Tabs} />
    <Route path='/login' component={Login} />
    <Route path='/protected' component={requireAuth(Protected, 'user')} />
    <Route component={NotFound} />
  </Switch>
)
