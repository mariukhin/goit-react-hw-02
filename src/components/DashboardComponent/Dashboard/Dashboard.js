import React, { Component } from 'react';
import shortId from 'shortid';
import styles from './Dashboard.module.css';
import Balance from '../Balance/Balance';
import DashboardControls from '../DashboardControls/DashboardControls';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { checkBalance } from '../../../services/helper';

export default class Dashboard extends Component {
  state = {
    inputVal: '',
    balance: 0,
    depositMoney: 0,
    withdrawMoney: 0,
    history: [],
  };

  depositMoney = () => {
    const { inputVal } = this.state;
    const num = Number(inputVal);
    const date = new Date();
    if (num > 0) {
      this.setState(prevState => ({
        balance: prevState.balance + num,
        history: [
          ...prevState.history,
          {
            id: shortId.generate(),
            type: 'deposit',
            amount: inputVal,
            date: date.toLocaleString(),
          },
        ],
        depositMoney: prevState.depositMoney + num,
      }));
    }
  };

  withdrawMoney = () => {
    const { inputVal, balance } = this.state;
    const num = Number(inputVal);
    const date = new Date();
    if (num > 0) {
      if (checkBalance(num, balance)) {
        this.setState(prevState => ({
          balance: prevState.balance - num,
          history: [
            ...prevState.history,
            {
              id: shortId.generate(),
              type: 'withdraw',
              amount: inputVal,
              date: date.toLocaleString(),
            },
          ],
          withdrawMoney: prevState.withdrawMoney + num,
        }));
      } else {
        alert('На счету недостаточно средств для проведения операции!');
      }
    } else {
      alert('Введите сумму для проведения операции!');
    }
  };

  changeInput = ({ target: { value } }) => {
    this.setState({ inputVal: value });
  };

  render() {
    const {
      inputVal,
      history,
      balance,
      depositMoney,
      withdrawMoney,
    } = this.state;
    return (
      <div className={styles.dashboard}>
        <DashboardControls
          value={inputVal}
          onChangeInput={this.changeInput}
          onDeposit={this.depositMoney}
          onWithdraw={this.withdrawMoney}
        />
        <Balance
          balance={balance}
          depositMoney={depositMoney}
          withdrawMoney={withdrawMoney}
        />
        {history.length > 0 && <TransactionHistory history={history} />}
      </div>
    );
  }
}
