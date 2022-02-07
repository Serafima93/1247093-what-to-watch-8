/*eslint-disable no-console*/
import { ActionType, Actions } from '../types/actions';
import { State } from '../types/state';
import { films } from '../mocks/films';
import { adaptToClient } from '../components/adapter/adapter';
import {
  FilmsCountForView,
  ButtonCondition,
  AuthorizationStatus
} from '../consts';

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
  LoadMoreFilms: ButtonCondition.Unblocked,
  tabFromState: 'Overview',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  downloadedFilms: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  console.log(state.downloadedFilms[0]);

  switch (action.type) {
    case ActionType.ChangeFilmGenre:
      return {
        ...state,
        genreFromState: action.payload,
        filmListFromState:
          action.payload === 'All genres'
            ? state.allFilmsList
            : state.filmListFromState.filter((item) => item.genre === action.payload),
      };
    case ActionType.ChangeFilmsCount:
      return {
        ...state,
        MaxFilms: state.MaxFilms + state.StepFilms,
      };
    case ActionType.LoadMoreFilms:
      return { ...state, LoadMoreFilms: action.payload };
    case ActionType.ChangeTabs:
      return { ...state, tabFromState: action.payload };
    case ActionType.LoadFilms:
      // как убрать any? Прописать type с сервера? Почему у меня при загрузке в стейт сразу куча багов?
      return {
        ...state,
        downloadedFilms: action.payload.map((filmFromServer: any) =>adaptToClient(filmFromServer)),
      };

    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.ResetFilms:
      // return { ...initialState };
      return {
        ...state,
        genreFromState: 'All genres',
        filmListFromState: state.downloadedFilms,
        allFilmsList: state.downloadedFilms,
        MaxFilms: FilmsCountForView.Max,
        MinFilms: FilmsCountForView.Min,
        StepFilms: FilmsCountForView.Step,
        LoadMoreFilms: ButtonCondition.Unblocked,
        tabFromState: 'Overview',
      };
    default:
      return state;
  }
};

export { reducer, initialState, filmGenreArray };
