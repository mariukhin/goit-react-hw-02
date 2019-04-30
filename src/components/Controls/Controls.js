import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Controls extends Component {
  static defaultProps = {
    disabledUp: false,
    disabledBack: false,
  };

  static propTypes = {
    disabledUp: PropTypes.bool,
    disabledBack: PropTypes.bool,
    onBack: PropTypes.func.isRequired,
    onUp: PropTypes.func.isRequired,
  };

  render() {
    const { onBack, onUp, disabledUp, disabledBack } = this.props;
    return (
      <section className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={onBack}
          disabled={disabledBack}
        >
          Назад
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={onUp}
          disabled={disabledUp}
        >
          Вперед
        </button>
      </section>
    );
  }
}
