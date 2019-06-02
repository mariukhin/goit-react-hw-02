import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';
import { getIndex } from '../../../services/helper';

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
    activeIndex: 1,
  };

  handleButton = ({ target: { name } }) => {
    const { activeIndex } = this.state;
    const { items } = this.props;
    const indexMin = 0;
    const indexMax = items.length;
    const index = getIndex(items, items[activeIndex - 1]);
    if (name === 'backBtn') {
      if (index - 1 === indexMin) {
        this.setState({ activeIndex: indexMin + 2 });
      }
      this.setState(state => ({
        activeIndex: state.activeIndex - 1,
      }));
    } else {
      if (index + 1 === indexMax - 1) {
        this.setState({ activeIndex: indexMax - 1 });
      }
      this.setState(state => ({
        activeIndex: state.activeIndex + 1,
      }));
    }
  };

  render() {
    const { activeIndex } = this.state;
    const { items } = this.props;
    const indexMax = items.length;

    return (
      <div className={styles.reader}>
        <Publication item={items[activeIndex - 1]} />
        <Counter activeIndex={activeIndex} itemTotal={indexMax} />
        <Controls onButtonClick={this.handleButton} disabled={activeIndex} />
      </div>
    );
  }
}
