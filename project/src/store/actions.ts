import {
  ActionType,
  ChangeGenreAction,
  ChangeFilmListAction,
  ResetFilmsAction
} from '../types/actions';

export const changeGenre = (): ChangeGenreAction => ({
  type: ActionType.ChangeFilmGenre,
});

export const changeFilmList = (filmList: any): ChangeFilmListAction => ({
  type: ActionType.ChangeFilmList,
  payload: filmList,
});

export const resetFilms = (): ResetFilmsAction => ({
  type: ActionType.ResetFilms,
});
