import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';


ReactDOM.render(
  <React.StrictMode>
    {}
    <App
      filmsCount={films}
      // Как иначе передать массив объектов
      filmStructure={films[0]}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

