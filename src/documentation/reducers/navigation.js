import * as types from 'documentation/constants/ActionTypes';
import DocStructure from 'documentation/constants/DocStructure';
import { routeToNavItem, flattenParentTree } from 'documentation/utils/navigation';

function setActiveStates(ids) {
  return (stateItem, index) => {
    return {
      ...stateItem,
      isActive: !!ids.find((id) => stateItem.id === id),
      children: stateItem.children.map(setActiveStates(ids)),
    };
  };
}

function setOpenStates(ids) {
  return (stateItem, index) => {
    return {
      ...stateItem,
      isOpen: !!ids.find((id) => stateItem.id === id),
      children: stateItem.children.map(setOpenStates(ids)),
    }
  };
}

export const initialState = {
  visible: false,
  items: DocStructure.map(routeToNavItem()),
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.NAVIGATION_SET_ACTIVE:
    return {
      ...state,
      items: state.items.map(setActiveStates(action.payload.ids))
    };
  case types.NAVIGATION_SET_OPEN:
    return {
      ...state,
      items: state.items.map(setOpenStates(action.payload.ids)),
    };
  case types.NAVIGATION_TOGGLE:
    return {
      ...state,
      visible: !state.visible,
    };
  case types.NAVIGATION_SHOW:
    return {
      ...state,
      visible: true,
    };
  case types.NAVIGATION_HIDE:
    return {
      ...state,
      visible: false,
    };
  default:
    return state;
  }
};
