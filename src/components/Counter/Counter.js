import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Counter extends Component {
  static defaultProps = {
    activeIndex: 0,
    itemTotal: 0,
  };

  static propTypes = {
    activeIndex: PropTypes.number,
    itemTotal: PropTypes.number,
  };

  render() {
    const { activeIndex, itemTotal } = this.props;
    return (
      <p className={styles.counter}>
        {activeIndex}/{itemTotal}
      </p>
    );
  }
}
