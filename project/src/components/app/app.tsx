import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';

import MainPage from '../main/main';
import AddReview from '../addReview/addReview';
// import FilmCard from '../film/film';
import Login from '../login/login';
import MyList from '../myList/myList';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { FilmStructure } from '../../types/filmCards';

type AppScreenProps = {
  // Как иначе передать массив объектов
  filmsCount: any;
  filmStructure: FilmStructure;
};

function App(props: AppScreenProps): JSX.Element {
  const { filmsCount, filmStructure } = props;
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
          <Player />
        </Route>
        {/* <Route exact path={AppRoute.Film}>
          <FilmCard />
        </Route> */}
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
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
