import { connect } from 'react-redux';
import MovieDetails from './MovieDetails';

function mapStoreToProps(store) {
  return {
    movies: store.search.movies
  };
}

export default connect(mapStoreToProps)(MovieDetails);