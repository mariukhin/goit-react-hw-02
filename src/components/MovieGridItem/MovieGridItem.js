/* eslint-disable */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import styles from './Controls.module.css';

export default class MovieGridItem extends Component {
  //   static defaultProps = {
  //     disabledUp: false,
  //     disabledBack: false,
  //   };

  static propTypes = {
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  };

  render() {
    const { title, posterUrl, overview } = this.props;
    return (
      <Fragment>
        <img src={posterUrl} alt="" />
        <div className="content">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
      </Fragment>
    );
  }
}
