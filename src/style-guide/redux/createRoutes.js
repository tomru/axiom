import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import { navigationRouteEnter } from 'style-guide/actions/navigation';
import App from 'style-guide/containers/App';
import DocPage from 'style-guide/containers/DocPage';
import Landing from 'style-guide/containers/Landing';
import SearchResults from 'style-guide/containers/SearchResults';

function onEnter(dispatch, route) {
  return () => {
    dispatch(navigationRouteEnter(route));
  };
}

function createRoute(dispatch) {
  return (item, index) => {
    if (item.children && item.children.length) {
      return (
        <Route path={item.path} key={index}>
          {do {
            if (item.children[0].path) {
              <IndexRedirect to={item.children[0].path} />
            }
          }}

          { item.children.map(createRoute(dispatch)) }
        </Route>
      );
    }

    if (item.path) {
      return (
        <Route
          path={item.path}
          component={DocPage}
          key={index}
          onEnter={onEnter(dispatch, item)}
          docData={item} />
      );
    }

    return (
      <IndexRoute
        component={DocPage}
        key={index}
        onEnter={onEnter(dispatch, item)}
        docData={item} />
    );
  };
}

export default function createRoutes(store) {
  const { dispatch, getState } = store;
  const { navigation: {items} } = getState();

  return (
    <Route path="/">
      <IndexRoute component={Landing} />
      <Route component={App}>
        <route path="search" component={SearchResults} />
        <Route path="docs">
          <IndexRedirect to={items[0].path} />
          { items.map(createRoute(dispatch)) }
        </Route>
      </Route>
    </Route>
  );
}
