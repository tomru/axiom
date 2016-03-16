import { schemes } from 'sass-vars';
import * as types from 'documentation/constants/ActionTypes';

export const initialState = {
  active: schemes[0].class,
  available: schemes.map((scheme) => scheme.class),
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.SCHEMES_SET_ACTIVE:
    return {
      ...state,
      active: action.payload.scheme,
    };
  default:
    return state;
  }
};
