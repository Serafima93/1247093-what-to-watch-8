/*eslint-disable no-console*/
import { ActionType, Actions } from '../types/actions';
import { State } from '../types/state';
import { films } from '../mocks/films';

// тут или же в main?
let filmGenreArray: string[] = ['All genres'];
films.forEach((item: typeof films[0]) => {
  filmGenreArray.push(item.genre);
});
filmGenreArray = [...new Set(filmGenreArray)];


const initialState = {
  genreFromState: 'All genres',
  filmListFromState: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeFilmGenre:
      return { ...state, genreFromState: action.payload };
    case ActionType.ChangeFilmList:
      return { ...state, filmListFromState: action.payload };
    case ActionType.ResetFilms:
      return { ...initialState };
    default:
      return state;
  }
};

export { reducer, initialState, filmGenreArray };
