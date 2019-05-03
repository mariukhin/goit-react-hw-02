import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardControls.module.css';

const DashboardControls = ({ value, onChangeInput, onDeposit, onWithdraw }) => (
  <section className={styles.controls}>
    <input
      className={styles.input}
      type="number"
      value={value}
      onChange={onChangeInput}
    />
    <button className={styles.button} type="button" onClick={onDeposit}>
      Deposit
    </button>
    <button className={styles.button} type="button" onClick={onWithdraw}>
      Withdraw
    </button>
  </section>
);
DashboardControls.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onDeposit: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
};
export default DashboardControls;
