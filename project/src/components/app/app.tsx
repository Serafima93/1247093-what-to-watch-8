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
// import { FilmSturcture } from '../../types/filmCards';

type AppScreenProps = {
  filmsCount: number[];
  name: string;
  genre: string;
  released: number;
};

function App(props:  AppScreenProps): JSX.Element {
  const { name, genre, released, filmsCount } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            filmsCount={filmsCount}
            name={name}
            genre={genre}
            released={released}
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
