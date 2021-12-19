// Хранилище
import { FilmStructure } from '../types/filmCards';

export type State = {
  genreFromState: string;
  filmListFromState: FilmStructure[];
  allFilmsList: FilmStructure[];
};
