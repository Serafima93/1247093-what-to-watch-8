export enum ActionType {
  ChangeFilmGenre = 'film/genre',
  ChangeFilmList = 'film/filmList',
  ResetFilms = 'film/reset',
  ChangeFilmsCount = 'film/changeCount',
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
  payload: any;
};

export type Actions = ChangeGenreAction | ResetFilmsAction | ChangeFilmsCount;
