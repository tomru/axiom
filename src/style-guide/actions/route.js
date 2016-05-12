import { browserHistory } from 'react-router';

export function goToSearchPage(q) {
  return () => {
    browserHistory.push({
      pathname: '/search',
      query: { q },
    });
  };
}
