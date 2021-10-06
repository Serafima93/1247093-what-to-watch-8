import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const FilmsCardsCount = {
  FILMS_COUNT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const FilmDescription = {
  filmName: 'The Grand Budapest Hotel',
  filmType: 'Drama',
  filmDate: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    {/* я понимаю что это слишком длинно, но не знаю как сделать это короче */}
    <App
      filmsCount={FilmsCardsCount.FILMS_COUNT}
      filmName={FilmDescription.filmName}
      filmType={FilmDescription.filmType}
      filmDate={FilmDescription.filmDate}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
