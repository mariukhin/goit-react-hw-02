import React from 'react';
import PropTypes from 'prop-types';

// import styles from './Controls.module.css';

const SearchBar = ({ value }) => (
  <input
    type="text"
    className="input"
    value={value}
    // onChange={onChangeFilter}
    placeholder="Type to filter movies..."
  />
);
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SearchBar;
