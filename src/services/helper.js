export function getIndex(items, activeItem) {
  return items.indexOf(activeItem);
}
export const checkBalance = (inputVal, balance) => balance - inputVal >= 0;
export const filterMovies = (movies, filter) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase()),
  );
};
