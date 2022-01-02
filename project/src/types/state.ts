// Хранилище
import { FilmStructure } from '../types/filmCards';

export type State = {
  genreFromState: string;
  filmListFromState: FilmStructure[];
  allFilmsList: FilmStructure[];
  MaxFilms: number;
  MinFilms: number;
  StepFilms: number;
  LoadMoreFilms: boolean;
};
