import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    {}
    <App
      // Как иначе передать массив объектов
      filmsCount={films}
      //Правильно ли я делаю что передаю через определенный индекс. Как иначе передать структуру фильма. Их же много
      filmStructure={films[0]}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
