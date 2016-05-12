import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import { navigationRouteEnter, navigationSetActiveVersion } from 'style-guide/actions/navigation';
import App from 'style-guide/containers/App';
import Doc from 'style-guide/containers/Doc';
import DocExample from 'style-guide/containers/DocExample';
import Landing from 'style-guide/containers/Landing';
import SearchResults from 'style-guide/containers/SearchResults';
import { findDocById } from 'style-guide/utils/navigation';

function onEnterVersionRoute(dispatch, version) {
  return () => {
    dispatch(navigationSetActiveVersion(version));
  };
}

function onEnterDocRoute(dispatch, route) {
  return () => {
    dispatch(navigationRouteEnter(route));
  };
}

function createRoute(dispatch, version) {
  /* eslint-disable react/display-name */
  return (item, index) => {
  /* eslint-enable react/display-name */
    if (item.children && item.children.length) {
      return (
        <Route key={ index } path={ item.path }>
          { do {
            if (item.children[0].path) {
              <IndexRedirect to={ item.children[0].path } />
            }
          } }

          { item.children.map(createRoute(dispatch, version)) }
        </Route>
      );
    }

    const doc = findDocById(version, item.id);

    return (
      <Route
          component={ Doc }
          doc={ doc }
          key={ index }
          navItem={ item }
          onEnter={ onEnterDocRoute(dispatch, item) }
          path={ item.path }>
        <IndexRoute component={ DocExample } doc={ doc } />
      </Route>
    );
  };
}

export default function createRoutes(store) {
  const { dispatch, getState } = store;
  const { navigation: { versions } } = getState();

  return (
    <Route path="/">
      <IndexRoute component={ Landing } />
      <Route component={ App }>
        <Route component={ SearchResults } path="search"/>
        <Route path="docs">
          <IndexRedirect to={ `current/${versions.current[0].path}` } />
          { Object.keys(versions).map((version, index) =>
            <Route key={ index } onEnter={ onEnterVersionRoute(dispatch, version) } path={ version }>
              <IndexRedirect to={ versions[version][0].path } />
              { versions[version].map(createRoute(dispatch, version)) }
            </Route>
          ) }
        </Route>
      </Route>
    </Route>
  );
}
