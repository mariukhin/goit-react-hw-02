import React from 'react';
import PropTypes from 'prop-types';
import Reader from './Reader/Reader';

const App = ({ items }) => (
  <div>
    <Reader items={items} />
  </div>
);
App.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default App;
