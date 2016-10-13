import { browserHistory } from 'react-router';
import { getFirstPath } from 'style-guide/utils/examples';

export function goToDocs() {
  browserHistory.push({
    pathname: getFirstPath(),
  });
}
