/*eslint-disable no-console*/
import { ActionType, Actions } from '../types/actions';
import { State } from '../types/state';
import { films } from '../mocks/films';

const initialState = {
  genre: 'All genres',
  filmList: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeFilmGenre:
      return { ...state, genre: action.payload };
    case ActionType.ChangeFilmList:
      return { ...state, filmList: action.payload };
    case ActionType.ResetFilms:
      return { ...state, filmList: films };
    default:
      return state;
  }
};

export { reducer };
