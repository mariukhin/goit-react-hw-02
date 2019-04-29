import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

const getIndex = (items, activeItem) => items.indexOf(activeItem);

export default class Reader extends Component {
  //   static defaultProps = {
  //     step: 1,
  //     initialValue: 0,
  //   };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  handleBack = () => {
    const { items, activeItem, indexMin } = this.state;

    const index = getIndex(items, activeItem);
    if (index - 1 === indexMin) {
      this.setState({ btnDisabledBack: true });
    }
    this.setState(state => ({
      activeItem: state.items[index - 1],
      btnDisabledUp: false,
    }));
  };

  handleUp = () => {
    const { items, activeItem, indexMax } = this.state;
    const index = getIndex(items, activeItem);
    if (index + 1 === indexMax) {
      this.setState({ btnDisabledUp: true });
    }
    this.setState(state => ({
      activeItem: state.items[index + 1],
      btnDisabledBack: false,
    }));
  };

  state = {
    items: this.props.items,
    indexMin: 0,
    indexMax: this.props.items.length - 1,
    activeItem: this.props.items[3],
    btnDisabledUp: false,
    btnDisabledBack: false,
  };

  render() {
    const { activeItem, btnDisabledUp, btnDisabledBack } = this.state;
    return (
      <div className="reader">
        <Publication item={activeItem} />
        <Counter />
        <Controls
          onBack={this.handleBack}
          onUp={this.handleUp}
          disabledUp={btnDisabledUp}
          disabledBack={btnDisabledBack}
        />
      </div>
    );
  }
}
