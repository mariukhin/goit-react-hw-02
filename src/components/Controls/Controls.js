import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onBack, onUp, disabledUp, disabledBack }) => (
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
Controls.propTypes = {
  disabledUp: PropTypes.bool,
  disabledBack: PropTypes.bool,
  onBack: PropTypes.func.isRequired,
  onUp: PropTypes.func.isRequired,
};
Controls.defaultProps = {
  disabledUp: false,
  disabledBack: false,
};
export default Controls;
