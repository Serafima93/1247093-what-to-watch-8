import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';

import MainPage from '../main/main';
import UsersReview from '../review.tsx/users-reviews';
// import FilmCard from '../film/film';
import Login from '../login/login';
import MyList from '../myList/myList';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { FilmStructure, FilmComment } from '../../types/filmCards';


type AppScreenProps = {
  filmsCount: FilmStructure[];
  filmStructure: FilmStructure;
  commentsCount: FilmComment[];
  filmComments: FilmComment;
};

function App(props: AppScreenProps): JSX.Element {
  const { filmsCount, filmStructure, filmComments, commentsCount } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            filmsCount={filmsCount}
            structure = {filmStructure}
          />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player playerStructure = {filmStructure}/>
        </Route>
        {/* <Route exact path={AppRoute.Film}>
          <FilmCard />
        </Route> */}
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route exact path={AppRoute.UsersReview}>
          <UsersReview
            reviewCount = {commentsCount}
            reviewStructure = {filmComments}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList filmsCount = {filmsCount}/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
