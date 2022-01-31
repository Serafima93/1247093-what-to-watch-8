import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { comments } from './mocks/comments';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createAPI } from './services/api';

import { Provider } from 'react-redux';
import { reducer, initialState } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import { requireAuthorization } from './store/actions';
import { fetchQuestionAction, checkAuthAction } from './store/api-actions';
import { ThunkAppDispatch } from './types/actions';
import { AuthorizationStatus } from './consts';

const api = createAPI(() =>store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));

// где вызывать моки. Тут или в редьюсер?
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchQuestionAction());

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
