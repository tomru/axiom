import isomorphicFetch from 'isomorphic-fetch';

export function fetch(url, options) {
  return isomorphicFetch(url, {
    method: 'GET',
    ...options,
  });
}

export function getJsonOrThrow(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json()
      .catch((error) => { throw new Error(error) });
  }

  throw new Error(response.message);
}

export function apiSearchRoutes(q) {
  if (!q) {
    return Promise.reject();
  }

  return fetch(`/api/search?q=${q}`).then(getJsonOrThrow);
}
