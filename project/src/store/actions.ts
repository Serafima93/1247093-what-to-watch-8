import {
  ActionType,
  ChangeGenreAction,
  ResetFilmsAction,
  ChangeFilmsCount
} from '../types/actions';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeFilmGenre,
  payload: genre,
});

export const resetFilms = (): ResetFilmsAction => ({
  type: ActionType.ResetFilms,
});

export const changeFilmsCount = (count: any): ChangeFilmsCount => ({
  type: ActionType.ChangeFilmsCount,
  payload: count,
});
