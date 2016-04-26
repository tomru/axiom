import * as types from 'style-guide/constants/ActionTypes';
import { hasVisibleChildren, flattenParents } from 'style-guide/utils/navigation';

export function navigationRouteEnter(route) {
  return (dispatch, getState) => {
    dispatch(navigationSetActive(route));
    dispatch(navigationSetOpen(route));
  };
}

export function navigationItemClick(item) {
  return (dispatch, getState) => {
    if (hasVisibleChildren(item)) {
      dispatch(navigationSetOpen(item));
    } else {
      dispatch(navigationSetActive(item));
    }
  };
}

export function navigationSetOpen(item) {
  return (dispatch, getState) => {
    const {navigation: {items}} = getState();
    const ids = flattenParents(items, item).map(({id}) => id);

    dispatch({
      type: types.NAVIGATION_SET_OPEN,
      payload: { ids },
    });
  }
}

export function navigationSetActive(item) {
  return (dispatch, getState) => {
    const {navigation: {items}} = getState();
    const ids = flattenParents(items, item).map(({id}) => id);

    dispatch({
      type: types.NAVIGATION_SET_ACTIVE,
      payload: { ids },
    });
  }
}
