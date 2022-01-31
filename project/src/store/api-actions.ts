import {ThunkActionResult} from '../types/actions';
import {loadFilms, requireAuthorization, requireLogout} from './actions';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../consts';
import {FilmStructure} from '../types/filmCards';
import {AuthData} from '../types/auth-data';

export const fetchQuestionAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmStructure[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

// что такое стор?Где он? Откуда методы?
export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
