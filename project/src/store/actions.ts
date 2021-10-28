import {
  ActionType,
  ChangeGenreAction,
  ChangeFilmListAction,
  ResetFilmsAction
} from '../types/actions';

export const changeGenre = (count: number): ChangeGenreAction => ({
  type: ActionType.ChangeFilmGenre,
  payload: count,
});

export const changeFilmList = (): ChangeFilmListAction => ({
  type: ActionType.ChangeFilmList,
});

export const resetFilms = (): ResetFilmsAction => ({
  type: ActionType.ResetFilms,
});
