import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, depositMoney, withdrawMoney }) => (
  <section className={styles.balance}>
    <span role="img" aria-label="line">
      ⬆️{depositMoney}$
    </span>
    <span role="img" aria-label="line">
      ⬇️{withdrawMoney}$
    </span>
    <span>Balance: {balance}$</span>
  </section>
);
Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  withdrawMoney: PropTypes.number.isRequired,
  depositMoney: PropTypes.number.isRequired,
};
export default Balance;
