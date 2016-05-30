import { schemes } from 'bw-axiom/sass';
import * as types from 'style-guide/constants/ActionTypes';

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
