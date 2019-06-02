import React from 'react';
import Reader from './ReaderComponent/Reader/Reader';
import MoviePage from './MoviePageComponent/MoviePage/MoviePage';
import Dashboard from './DashboardComponent/Dashboard/Dashboard';
import publications from '../assets/publications.json';
import movies from '../assets/movies.json';

const App = () => (
  <div>
    <Reader items={publications} />
    <MoviePage movies={movies} />
    <Dashboard />
  </div>
);
export default App;
