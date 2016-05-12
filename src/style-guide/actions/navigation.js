import * as types from 'style-guide/constants/ActionTypes';
import { hasVisibleChildren, getParentIds } from 'style-guide/utils/navigation';

export function navigationRouteEnter(route) {
  return (dispatch) => {
    dispatch(navigationSetActiveItem(route));
    dispatch(navigationSetOpenItem(route));
  };
}

export function navigationItemClick(item) {
  return (dispatch) => {
    if (hasVisibleChildren(item)) {
      dispatch(navigationSetOpenItem(item));
    } else {
      dispatch(navigationSetActiveItem(item));
    }
  };
}

export function navigationSetActiveVersion(version) {
  return {
    type: types.NAVIGATION_SET_ACTIVE_VERSION,
    payload: { version },
  };
}

export function navigationSetActiveItem(item) {
  return (dispatch, getState) => {
    const { navigation: { activeVersion, versions } } = getState();
    const ids = getParentIds(versions[activeVersion], item);

    dispatch({
      type: types.NAVIGATION_SET_ACTIVE_ITEM,
      payload: { ids },
    });
  };
}

export function navigationSetOpenItem(item) {
  return (dispatch, getState) => {
    const { navigation: { activeVersion, versions } } = getState();
    const ids = getParentIds(versions[activeVersion], item);

    dispatch({
      type: types.NAVIGATION_SET_OPEN_ITEM,
      payload: { ids },
    });
  };
}
