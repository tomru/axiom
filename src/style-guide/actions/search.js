import * as types from 'style-guide/constants/ActionTypes';
import { apiSearchRoutes } from 'style-guide/actions/api';
import { goToSearchPage } from 'style-guide/actions/route';

export function searchReceiveSearch(results) {
  return {
    type: types.SEARCH_RECEIVE_SEARCH,
    payload: {results},
  };
}

export function searchRequestSearch() {
  return {
    type: types.SEARCH_REQUEST_SEARCH,
  };
}

export function searchRoutes(text) {
  return (dispatch) => {
    dispatch(goToSearchPage(text));
    dispatch(searchRequestSearch());

    return apiSearchRoutes(text)
      .then(results => dispatch(searchReceiveSearch(results)));
  };
}
