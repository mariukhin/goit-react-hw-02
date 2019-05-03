import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChangeFilter }) => (
  <input
    type="text"
    className={styles.input}
    value={value}
    onChange={onChangeFilter}
    placeholder="Type to filter movies..."
  />
);
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default SearchBar;
