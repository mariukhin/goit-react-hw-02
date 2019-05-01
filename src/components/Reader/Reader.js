import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

const getIndex = (items, activeItem) => items.indexOf(activeItem);

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    items: this.props.items,
    indexMax: this.props.items.length,
    activeItem: this.props.items[3],
    activeIndex: 4,
    btnDisabledUp: false,
    btnDisabledBack: false,
  };

  handleBack = () => {
    const { items, activeItem } = this.state;

    const indexMin = 0;
    const index = getIndex(items, activeItem);
    if (index - 1 === indexMin) {
      this.setState({ btnDisabledBack: true, activeIndex: indexMin + 2 });
    }
    this.setState(state => ({
      activeItem: state.items[index - 1],
      activeIndex: state.activeIndex - 1,
      btnDisabledUp: false,
    }));
  };

  handleUp = () => {
    const { items, activeItem, indexMax } = this.state;
    const index = getIndex(items, activeItem);
    if (index + 1 === indexMax - 1) {
      this.setState({ btnDisabledUp: true, activeIndex: indexMax - 1 });
    }
    this.setState(state => ({
      activeItem: state.items[index + 1],
      activeIndex: state.activeIndex + 1,
      btnDisabledBack: false,
    }));
  };

  render() {
    const {
      activeItem,
      btnDisabledUp,
      btnDisabledBack,
      indexMax,
      activeIndex,
    } = this.state;
    return (
      <div className={styles.reader}>
        <Publication item={activeItem} />
        <Counter activeIndex={activeIndex} itemTotal={indexMax} />
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
