import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import { componentMap } from 'documentation/constants/DocStructure';
import { navigationRouteEnter } from 'documentation/actions/navigation';
import App from 'documentation/containers/App';
import Docs from 'documentation/containers/Docs';
import Landing from 'documentation/containers/Landing';
import SearchResults from 'documentation/containers/SearchResults';

function onEnter(dispatch, route) {
  return () => {
    dispatch(navigationRouteEnter(route));
  };
}

function getComponent({component}) {
  return typeof componentMap[component] === 'function'
    ? componentMap[component]
    : componentMap[component].container;
}

function createRoute(dispatch) {
  return (navItem, index) => {
    if (navItem.children && navItem.children.length) {
      return (
        <Route path={navItem.path} key={index}>
          {do {
            if (navItem.children[0].path) {
              <IndexRedirect to={navItem.children[0].path} />
            }
          }}

          { navItem.children.map(createRoute(dispatch)) }
        </Route>
      );
    }

    if (navItem.path) {
      return (
        <Route
          path={navItem.path}
          component={getComponent(navItem)}
          key={index}
          onEnter={onEnter(dispatch, navItem)} />
      );
    }

    return (
      <IndexRoute
        component={getComponent(navItem)}
        key={index}
        onEnter={onEnter(dispatch, navItem)} />
    );
  };
}

export default function createRoutes(store) {
  const { dispatch, getState } = store;
  const { navigation: { items } } = getState();

  return (
    <Route path="/">
      <IndexRoute component={Landing} />
      <Route component={App}>
        <route path="search" component={SearchResults} />
        <Route path="docs" component={Docs}>
          <IndexRedirect to={items[0].path} />
          { items.map(createRoute(dispatch)) }
        </Route>
      </Route>
    </Route>
  );
}
