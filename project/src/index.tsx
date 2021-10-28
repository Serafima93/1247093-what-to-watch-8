import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { comments } from './mocks/comments';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    {}
    <Provider store={store}>
      <App
        filmsCount={films}
        filmStructure={films[0]}
        commentsCount={comments}
        filmComments={comments[0]}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
