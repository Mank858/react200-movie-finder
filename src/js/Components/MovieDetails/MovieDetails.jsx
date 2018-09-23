import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { movies } = this.props;

        const result = movies.filter((movie) => {
            return movie.data.imdbID === this.props.location.pathname.match(/tt.+/)[0];
        });
        return (
            <div>
                {result[0] ? result.map((display) => {
                    return (
                        <div className='row'>
                            <div className='col-md-10'>
                                <div className='card details border-info'>
                                    <div className='card-body'>
                                        <img className='imgDetails' src={display.data.Poster} alt='Card image cap' />
                                <div className='card-header text-black-50 bg-info'>Movie Details</div>
                                        <h1 className='card-text'>{display.data.Title}</h1>
                                        <span className='card-text i'>{display.data.Released}</span>
                                        <span className='card-text i'>{display.data.Runtime}</span>
                                        <span className='card-text i'>{display.data.Genre}</span>
                                        <p className='card-text'>{display.data.Plot}</p>
                                        <p className='card-text'>{display.data.Awards}</p>
                                        <p className='card-text'>Metascore: {display.data.Metascore}/100</p>
                                        <p className='card-text'>IMDB: {display.data.imdbRating}</p>
                                        <a className='btn btn-info back-button'><Link to='/' >Back to search</Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>);
                }) : <span />
                }
            </div>
        );
    }
}

// result[0] ? result.map((display) => {
//     return (<div className='row'>
//         <div className='card border-info'>
//         <img className='img' src={display.data.Poster}  />
//             <div className='card-header text-black-50 bg-info'>Movie Details</div>
//             <div className='card-body'>
//                 <h4 className='card-text'>{display.data.Title}</h4>
//                 <span className='card-text'>{display.data.Released}</span>
//                 <span className='card-text'>{display.data.Runtime}</span>
//                 <span className='card-text'>{display.data.Genre}</span>
//                 <p className='card-text'>{display.data.Plot}</p>
//                 <p className='card-text'>{display.data.Awards}</p>
//                 <p className='card-text'>Metascore: {display.data.Metascore}/100</p>
//                 <p className='card-text'>IMDB: {display.data.imdbRating}</p>
//             </div>
//         </div>
//     </div>);
// }) : <span></span>
