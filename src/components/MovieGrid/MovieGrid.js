import React from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import styles from './MovieGrid.module.css';

const MovieGrid = ({ movies }) =>
  movies.length > 0 && (
    <div className={styles.movieGrid}>
      {movies.map(item => (
        <div className={styles.movieCard} key={item.id}>
          <MovieGridItem {...item} />
        </div>
      ))}
    </div>
  );
MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default MovieGrid;
