const defaultState = {
  searchInput: '',
  Title: '',
  movies: [],
  release_year: '',
  image: '',
  Plot: '',
  Poster: '',
  Released: ''
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'UPDATE_SEARCH': {
      return {
        ...state,
        searchInput: payload
      };
    }

    case 'GET_MOVIE_FULFILLED': {
      return {
        ...state,
        movies: payload,
        searchInput: ''
      };
    }

    case 'GET_MOVIE_REJECTED': {
      return {
        ...state,
        error: true,
        movies: null,
        searchInput: ''
      };
    }
    default: {
      return state;
    }

  }
}
