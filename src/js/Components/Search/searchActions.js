// Action Creators

import axios from 'axios';

export function updateSearch(searchInput) {
  return {
    type: 'UPDATE_SEARCH',
    payload: searchInput
  };
}

export function getMovie(searchInput) {
  return {
    type: 'GET_MOVIE',
    payload: axios.get(`https://www.omdbapi.com/?s=${searchInput}&apikey=8730e0e`)
      .then((response) => {
        const results = response.data.Search.map(Arr => axios.get(`https://www.omdbapi.com/?i=${Arr.imdbID}&apikey=8730e0e`));
        return axios.all(results)
        .then(res2 => res2);
      })
  };
}
