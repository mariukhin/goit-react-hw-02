import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import publications from './publications.json';

ReactDOM.render(<App items={publications} />, document.getElementById('root'));
