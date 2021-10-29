/*eslint-disable no-console*/

import { ActionType, Actions } from '../types/actions';
import { State } from '../types/state';
import { films } from '../mocks/films';

// создание сортировки по жанрам
let filmGenreArray: string[] = ['All genres'];
films.forEach((item) => {
  filmGenreArray.push(item.genre);
});
filmGenreArray = [...new Set(filmGenreArray)];

// сортировка фильмов исходя из жанров
const choosenGenreExample = 'Comedy';
const FilmByGenre = films.filter((item) => item.genre === choosenGenreExample);

const initialState = {
  genre: 'All genres',
  filmList: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeFilmGenre:
      return { ...state, genre: state.genre };
    case ActionType.ChangeFilmList:
      return { ...state, filmList: action.payload };
    case ActionType.ResetFilms:
      return { ...initialState };
    default:
      return state;
  }
};

export { reducer, filmGenreArray, FilmByGenre };
