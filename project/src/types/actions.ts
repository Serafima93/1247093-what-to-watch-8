export enum ActionType {
  ChangeFilmGenre = 'film/genre',
  ChangeFilmList = 'film/filmList',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeFilmGenre;
  payload: number;
};

export type ChangeFilmListAction = {
  type: ActionType.ChangeFilmList;
};

export type Actions = ChangeGenreAction | ChangeFilmListAction;
