import {
  ActionType,
  ChangeGenreAction,
  ResetFilmsAction,
  ChangeFilmsCount,
  LoadMoreFilms,
  ChangeTabs
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

export const changeTabs = (name: string): ChangeTabs => ({
  type: ActionType.ChangeTabs,
  payload: name,
});
