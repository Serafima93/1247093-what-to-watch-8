export enum ActionType {
  ChangeFilmGenre = 'film/genre',
  ChangeFilmList = 'film/filmList',
  ResetFilms = 'film/reset',
  ChangeFilmsCount = 'film/changeCount',
  LoadMoreFilms = 'button/loadMore',
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

export type Actions =
  | ChangeGenreAction
  | ResetFilmsAction
  | ChangeFilmsCount
  | LoadMoreFilms;
