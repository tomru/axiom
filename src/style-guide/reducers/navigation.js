import * as types from 'style-guide/constants/ActionTypes';

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
  activeVersion: 'current',
  versions: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.NAVIGATION_SET_ACTIVE_VERSION:
    return {
      ...state,
      activeVersion: action.payload.version,
    };
  case types.NAVIGATION_SET_ACTIVE_ITEM:
    return {
      ...state,
      versions: {
        ...state.versions,
        [state.activeVersion]: state.versions[state.activeVersion]
          .map(setActiveStates(action.payload.ids)),
      },
    };
  case types.NAVIGATION_SET_OPEN_ITEM:
    return {
      ...state,
      versions: {
        ...state.versions,
        [state.activeVersion]: state.versions[state.activeVersion]
          .map(setOpenStates(action.payload.ids)),
      },
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
