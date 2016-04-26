import isomorphicFetch from 'isomorphic-fetch';

export function fetch(url, options) {
  return isomorphicFetch(url, {
    method: 'GET',
    ...options,
  });
}

export function getJsonOrReject(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json()
      .catch((error) => Promise.reject(error));
  }

  return Promise.reject(response);
}

export function apiSearchRoutes(q) {
  if (!q) {
    return Promise.reject();
  }

  return fetch(`/api/search?q=${q}`)
    .then(getJsonOrReject);
}
