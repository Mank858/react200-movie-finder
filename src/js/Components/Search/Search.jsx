import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {
  updateSearch,
  getMovie,
} from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.updateSearch = this.updateSearch.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getMovie() {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { searchInput } = this.props;
    dispatch(getMovie(searchInput));
  }

  updateSearch(event) {
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearch(value));
  }

  handleKeyPress(e) {
    const { dispatch } = this.props;
    const { searchInput } = this.props;
    if (e.key === 'Enter' && searchInput !== '') {
      dispatch(getMovie(searchInput));
    }
  }


  render() {
    const { searchInput, movies } = this.props;
    console.log('what is in my array after axios call', movies);
    return (
      <div>
        <div className='input-group search'>
          <input type='text' className='form-control' onKeyPress={this.handleKeyPress} value={searchInput} onChange={this.updateSearch} />
          <div className='input-group-append'>
            <button onClick={this.getMovie} className='btn btn-primary'>Go!</button>
          </div>
        </div>
        {
          movies ? movies.map((display) => {
            return (
            <div className='row'>
            <div className='col-md-8'>
              <div className='card border-info'>
                <div className='card-body'>
                  <img className='img' src={display.data.Poster} alt='Card image cap' />
                  <h5 className='card-title'>{display.data.Title}</h5>
                  <p className='card-title'>{display.data.Year}</p>
                  <p className='card-text'>{display.data.Plot}</p>
                  <Link to={`/movie/${display.data.imdbID}`} ><a className='btn btn-outline-info list-button'>View More Details</a></Link>
                </div>
                </div>
              </div>
            </div>);
          }) : <span></span>
        }
      </div>
    );
  }
}
