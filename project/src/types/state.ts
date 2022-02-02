// Хранилище
import { FilmStructure } from '../types/filmCards';
import { AuthorizationStatus } from '../consts';

export type State = {
  genreFromState: string;
  filmListFromState: FilmStructure[];
  allFilmsList: FilmStructure[];
  MaxFilms: number;
  MinFilms: number;
  StepFilms: number;
  LoadMoreFilms: boolean;
  tabFromState: string;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean,
  downloadedFilms: FilmStructure[];
};
