import React from 'react';
import PropTypes from 'prop-types';
import Reader from './Reader/Reader';
import MoviePage from './MoviePage/MoviePage';
import '../styles.css';

const App = ({ items, movies }) => (
  <div>
    <Reader items={items} />
    <MoviePage movies={movies} />
  </div>
);
App.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default App;
