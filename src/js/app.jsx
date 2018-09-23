import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Search from './Components/Search';
import MovieDetails from './Components/MovieDetails';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='jumbotron text'>
            <h1 className='display-4'>Movie Finder</h1>
            <p className='p'>Always know those funny quotes</p>
          </div>
          <Route exact path='/' component={Search} />
          <Route path='/movie/:id' component={MovieDetails} />
          </div>
      </Router>
    );
  }
}
