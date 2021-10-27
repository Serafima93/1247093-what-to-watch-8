import { ActionType, Actions } from '../types/actions';
import { State } from '../types/state';

const FILMS_LIST = 0;

const initialState = {
  genre: 0,
  filmList: FILMS_LIST,
};

const STEP_COUNT = 1;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeFilmGenre:
      return { ...state, genre: state.genre + action.payload };
    case ActionType.ChangeFilmList:
      return { ...state, filmList: state.filmList + STEP_COUNT };
    default:
      return state;
  }
};

export { reducer };
