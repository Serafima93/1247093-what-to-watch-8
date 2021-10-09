import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const FilmsCardsCount = {
  FILMS_COUNT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

// const FilmDescription = {
//   filmName: 'The Grand Budapest Hotel',
//   filmType: 'Drama',
//   filmDate: 2014,
// };

ReactDOM.render(
  <React.StrictMode>
    {}
    <App
      filmsCount={FilmsCardsCount.FILMS_COUNT}
      name={films[0].name}
      genre={films[0].genre}
      released={films[0].released}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
