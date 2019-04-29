import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reader from './Reader/Reader';
import '../styles.css';

export default class App extends Component {
  // state = {
  //   ...this.props,
  // };

  // static defaultProps = {
  //   step: 1,
  //   initialValue: 0,
  // };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };
  // handleSignUp = credentials => {
  //   console.log(credentials);
  // };

  render() {
    return (
      <div>
        <Reader items={this.props.items} />
      </div>
    );
  }
}
