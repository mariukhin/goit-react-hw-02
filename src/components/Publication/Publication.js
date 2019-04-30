import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Publication extends Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { item } = this.props;
    const { title, text } = item;
    return (
      <section className={styles.publication}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </section>
    );
  }
}
