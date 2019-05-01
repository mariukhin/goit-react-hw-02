/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
// import styles from './Controls.module.css';

export default class MovieGrid extends Component {
  //   static defaultProps = {
  //     disabledUp: false,
  //     disabledBack: false,
  //   };

  //   static propTypes = {
  //     disabledUp: PropTypes.bool,
  //     disabledBack: PropTypes.bool,
  //     onBack: PropTypes.func.isRequired,
  //     onUp: PropTypes.func.isRequired,
  //   };

  render() {
    const { movies } = this.props;
    return (
      movies.length > 0 && (
        <div className="movie-grid">
          {movies.map(item => (
            <div className="movie-card" key={item.id}>
              <MovieGridItem {...item} />
            </div>
          ))}
        </div>
      )
    );
  }
}
