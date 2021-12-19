import {
  ActionType,
  ChangeGenreAction,
  // ChangeFilmListAction,
  ResetFilmsAction
} from '../types/actions';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeFilmGenre,
  payload: genre,
});

// export const changeFilmList = (): ChangeFilmListAction => ({
//   type: ActionType.ChangeFilmList,
// });

export const resetFilms = (): ResetFilmsAction => ({
  type: ActionType.ResetFilms,
});
