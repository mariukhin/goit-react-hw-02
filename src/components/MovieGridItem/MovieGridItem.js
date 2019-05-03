import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ title, posterUrl, overview }) => (
  <Fragment>
    <img className={styles.itemPhoto} src={posterUrl} alt="" />
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.overview}>{overview}</p>
    </div>
  </Fragment>
);
MovieGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};
export default MovieGridItem;
