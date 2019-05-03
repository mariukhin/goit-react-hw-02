import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';
import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';

const filterMovies = (movies, filter) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase()),
  );
};
export default class MoviePage extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    movies: this.props.movies,
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { movies, filter } = this.state;
    const filteredMovies = filterMovies(movies, filter);
    return (
      <div className={styles.container}>
        <SearchBar value={filter} onChangeFilter={this.changeFilter} />
        {filteredMovies.length > 0 ? (
          <MovieGrid movies={filteredMovies} />
        ) : (
          <p>No matching results!</p>
        )}
      </div>
    );
  }
}
