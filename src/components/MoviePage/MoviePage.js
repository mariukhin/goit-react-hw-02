import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Publication from '../Publication/Publication';
// import Counter from '../Counter/Counter';
// import Controls from '../Controls/Controls';
// import styles from './Reader.module.css';
import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';

// const getIndex = (items, activeItem) => items.indexOf(activeItem);

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
  };

  //   handleBack = () => {
  //     const { items, activeItem } = this.state;

  //     const indexMin = 0;
  //     const index = getIndex(items, activeItem);
  //     if (index - 1 === indexMin) {
  //       this.setState({ btnDisabledBack: true, activeIndex: indexMin + 2 });
  //     }
  //     this.setState(state => ({
  //       activeItem: state.items[index - 1],
  //       activeIndex: state.activeIndex - 1,
  //       btnDisabledUp: false,
  //     }));
  //   };

  //   handleUp = () => {
  //     const { items, activeItem, indexMax } = this.state;
  //     const index = getIndex(items, activeItem);
  //     if (index + 1 === indexMax - 1) {
  //       this.setState({ btnDisabledUp: true, activeIndex: indexMax - 1 });
  //     }
  //     this.setState(state => ({
  //       activeItem: state.items[index + 1],
  //       activeIndex: state.activeIndex + 1,
  //       btnDisabledBack: false,
  //     }));
  //   };

  render() {
    const { movies } = this.state;
    return (
      <div className="container">
        <SearchBar />
        <MovieGrid movies={movies} />
      </div>
    );
  }
}
