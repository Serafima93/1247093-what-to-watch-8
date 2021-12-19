import {
  ActionType,
  ChangeGenreAction,
  ResetFilmsAction
} from '../types/actions';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeFilmGenre,
  payload: genre,
});

export const resetFilms = (): ResetFilmsAction => ({
  type: ActionType.ResetFilms,
});
