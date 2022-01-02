import {
  ActionType,
  ChangeGenreAction,
  ResetFilmsAction,
  ChangeFilmsCount,
  LoadMoreFilms
} from '../types/actions';

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
