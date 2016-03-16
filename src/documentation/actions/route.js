import { browserHistory } from 'react-router';

export function goToSearchPage(q) {
  return (disaptch, getState) => {
    const {search: {text}} = getState();

    browserHistory.push({
      pathname: '/search',
      query: {q},
    });
  };
}
