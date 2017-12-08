// @flow
import React from 'react'
import { Route, Redirect, Switch } from 'react-router'

import App from 'src/components'
import NotFound from 'src/components/NotFound'

// TODO
import Todos from 'src/components/routes/Todos'

const Routes = () => (
  <App>
    <Switch>

      {/* Example Routes */}
      <Route exact path="/todos" component={Todos} />
      <Redirect exact from="/" to="/todos" />

      {/* 404 */}
      <Route component={NotFound} />

    </Switch>
  </App>
)

export default Routes
