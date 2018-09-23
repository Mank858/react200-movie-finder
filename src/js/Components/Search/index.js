import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
  return {
    movies: store.search.movies,
    searchInput: store.search.searchInput,
    // searchedCity: store.search.searchedCity,
    // lat: store.search.lat,
    // lon: store.search.lon,
    // Hightemp: store.search.Hightemp,
    // temp: store.search.temp,
    // pressure: store.search.pressure,
    // humidity: store.search.humidity,
    // Lowtemp: store.search.Lowtemp,
    // Hightemp: store.search.Hightemp,
    // Wind: store.search.Wind,
    // cityOutputs: store.search.cityOutputs
  };
}


export default connect(mapStoreToProps)(Search);
