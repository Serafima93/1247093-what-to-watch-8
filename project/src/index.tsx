import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { comments } from './mocks/comments';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer, initialState } from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

// где вызывать моки. Тут или в редьюсер?
const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    {}
    <Provider store={store}>
      <App
        filmsCount={initialState.filmListFromState}
        filmStructure={initialState.filmListFromState[0]}
        commentsCount={comments}
        filmComments={comments[0]}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
