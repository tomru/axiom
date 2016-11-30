import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'style-guide/containers/App';
import Doc from 'style-guide/containers/Doc';
import Labs from 'style-guide/containers/Labs';

export default (
  <Route path="/">
    <Route component={ App }>
      <IndexRoute component={ Doc } />
      <Route component={ Labs } path="labs" />
      <Route component={ Doc } path="**/*" />
    </Route>
  </Route>
);
