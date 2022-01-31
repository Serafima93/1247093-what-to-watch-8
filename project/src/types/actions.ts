import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export enum ActionType {
  ChangeFilmGenre = 'film/genre',
  ChangeFilmList = 'film/filmList',
  ResetFilms = 'film/reset',
  ChangeFilmsCount = 'film/changeCount',
  LoadMoreFilms = 'button/loadMore',
  ChangeTabs = 'film/changeTabs',
  LoadFilms = 'data/loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeFilmGenre;
  payload: string;
};

export type ResetFilmsAction = {
  type: ActionType.ResetFilms;
};

export type ChangeFilmsCount = {
  type: ActionType.ChangeFilmsCount;
};

export type LoadMoreFilms = {
  type: ActionType.LoadMoreFilms;
  payload: boolean;
};

export type ChangeTabs = {
  type: ActionType.ChangeTabs;
  payload: string;
};

export type LoadFilms = {
  type: ActionType.LoadFilms;
  payload: any;
};

export type RequireAuthorization = {
  type: ActionType.RequireAuthorization;
  payload: any;
  // payload: AuthorizationStatus;
};

export type RequireLogout = {
  type: ActionType.RequireLogout;
};

export type Actions =
  | ChangeGenreAction
  | ResetFilmsAction
  | ChangeFilmsCount
  | LoadMoreFilms
  | ChangeTabs
  | LoadFilms
  | RequireAuthorization
  | RequireLogout;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
