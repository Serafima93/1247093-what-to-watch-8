/*eslint-disable no-console*/

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';

import MainPage from '../main/main';
// import Reviews from '../tabs/reviews';
import AddReview from '../review/add-review';
import Login from '../login/login';

import Tabs from '../tabs/tabs';
// import Details from '../tabs/details';

import MyList from '../my-list/my-list';
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
          <MainPage structure={filmStructure} />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview />
        </Route>
        {/* <Route exact path={AppRoute.Details}>
          <Details />
        </Route> */}
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route
          path={AppRoute.Film}
          exact
          render={(params) => {
            const detailedCardStructure = filmsCount.find(
              (item) => item.id === Number(params.match.params.id));
            if (detailedCardStructure) {
              return (
                <Tabs
                  detailedCardStructure={detailedCardStructure}
                  reviewCount={commentsCount}
                  reviewStructure={filmComments}
                />
              );
            }
            return <div> No Film </div>;
          }}
        />
        <Route
          path={AppRoute.Player}
          exact
          render={(params) => {
            const playerStructure = filmsCount.find(
              (item) => item.id === Number(params.match.params.id));
            if (playerStructure) {
              return <Player playerStructure={playerStructure} />;
            }
            return <div> No Film </div>;
          }}
        />
        {/* <Route exact path={AppRoute.Reviews}>
          <Reviews reviewCount={commentsCount} reviewStructure={filmComments} />
        </Route> */}
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList filmsCount={filmsCount} />}
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
