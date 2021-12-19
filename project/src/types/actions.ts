export enum ActionType {
  ChangeFilmGenre = 'film/genre',
  ChangeFilmList = 'film/filmList',
  ResetFilms = 'film/reset',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeFilmGenre;
  payload: string;
};

// export type ChangeFilmListAction = {
//   type: ActionType.ChangeFilmList;
// };

export type ResetFilmsAction = {
  type: ActionType.ResetFilms;
};


export type Actions =
  | ChangeGenreAction
  // | ChangeFilmListAction
  | ResetFilmsAction;
