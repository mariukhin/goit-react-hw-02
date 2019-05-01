import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import publications from './publications.json';
import movies from './movies.json';

ReactDOM.render(
  <App items={publications} movies={movies} />,
  document.getElementById('root'),
);
