import { AuthorizationStatus } from '../consts';

import {
  ActionType,
  ChangeGenreAction,
  ResetFilmsAction,
  ChangeFilmsCount,
  LoadMoreFilms,
  ChangeTabs,
  LoadFilms,
  RequireAuthorization,
  RequireLogout
} from '../types/actions';

import { FilmStructure } from '../types/filmCards';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeFilmGenre,
  payload: genre,
});

export const resetFilms = (): ResetFilmsAction => ({
  type: ActionType.ResetFilms,
});

export const changeFilmsCount = (): ChangeFilmsCount => ({
  type: ActionType.ChangeFilmsCount,
});

export const loadMoreFilms = (condition: boolean): LoadMoreFilms => ({
  type: ActionType.LoadMoreFilms,
  payload: condition,
});

export const changeTabs = (name: string): ChangeTabs => ({
  type: ActionType.ChangeTabs,
  payload: name,
});

export const loadFilms = (filmsFromServer: FilmStructure): LoadFilms => ({
  type: ActionType.LoadFilms,
  payload: filmsFromServer,
});

export const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorization => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

export const requireLogout = (): RequireLogout => ({
  type: ActionType.RequireLogout,
});
