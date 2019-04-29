import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends Component {
  //   static defaultProps = {
  //     step: 1,
  //     initialValue: 0,
  //   };

  static propTypes = {
    disabledUp: PropTypes.bool,
    disabledBack: PropTypes.bool,
    onBack: PropTypes.func.isRequired,
    onUp: PropTypes.func.isRequired,
  };

  //   state = {
  //     value: this.props.initialValue,
  //   };

  render() {
    const { onBack, onUp, disabledUp, disabledBack } = this.props;
    return (
      <section className="controls">
        <button className="button" onClick={onBack} disabled={disabledBack}>
          Назад
        </button>
        <button className="button" onClick={onUp} disabled={disabledUp}>
          Вперед
        </button>
      </section>
    );
  }
}
