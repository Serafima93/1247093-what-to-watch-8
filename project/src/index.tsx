import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    {}
    <App
      filmsCount={films}
      filmStructure={films[0]}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
