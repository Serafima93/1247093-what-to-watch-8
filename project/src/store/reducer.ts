/*eslint-disable no-console*/
import { ActionType, Actions } from '../types/actions';
import { State } from '../types/state';
import { films } from '../mocks/films';
import { FilmsCountForView } from '../consts';

// создание массива жанров из пришедших фильмов
let filmGenreArray: string[] = ['All genres'];
films.forEach((item: typeof films[0]) => {
  filmGenreArray.push(item.genre);
});
filmGenreArray = [...new Set(filmGenreArray)];

const initialState = {
  genreFromState: 'All genres',
  filmListFromState: films,
  allFilmsList: films,
  MaxFilms: FilmsCountForView.Max,
  MinFilms: FilmsCountForView.Min,
  StepFilms: FilmsCountForView.Step,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeFilmGenre:
      return {
        ...state,
        genreFromState: action.payload,
        filmListFromState:
          action.payload === 'All genres'
            ? state.allFilmsList
            : state.filmListFromState.filter(
              (item) => item.genre === action.payload,
            ),
      };
    case ActionType.ChangeFilmsCount:
      return {
        ...state,
        MaxFilms: state.MaxFilms + state.StepFilms,
      };
    case ActionType.ResetFilms:
      return { ...initialState };
    default:
      return state;
  }
};

export { reducer, initialState, filmGenreArray };
