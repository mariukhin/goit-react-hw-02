import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Publication extends Component {
  //   static defaultProps = {
  //     step: 1,
  //     initialValue: 0,
  //   };

  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { title, text } = this.props.item;
    return (
      <section className="publication">
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </section>
    );
  }
}
