import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviePage.module.css';
import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';
import { filterMovies } from '../../../services/helper';

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
    filter: '',
  };

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const { filter } = this.state;
    const { movies } = this.props;
    return (
      <div className={styles.container}>
        <SearchBar value={filter} onChangeFilter={this.changeFilter} />
        {filterMovies(movies, filter).length ? (
          <MovieGrid movies={filterMovies(movies, filter)} />
        ) : (
          <p>No matching results!</p>
        )}
      </div>
    );
  }
}
