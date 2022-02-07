/* eslint-disable no-console */
import {connect, ConnectedProps} from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus , isCheckedAuth } from '../../consts';

import MainPage from '../main/main';
import AddReview from '../review/add-review';
import Login from '../login/login';
import Tabs from '../tabs/tabs';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { FilmStructure, FilmComment } from '../../types/filmCards';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state';

type AppScreenProps = {
  filmsCount: FilmStructure[];
  filmStructure: FilmStructure;
  commentsCount: FilmComment[];
  filmComments: FilmComment;
};

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & AppScreenProps;

function App(props: ConnectedComponentProps): JSX.Element {
  const { filmsCount, filmStructure, filmComments, commentsCount, authorizationStatus, isDataLoaded } = props;


  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage structure={filmStructure} />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview />
        </Route>
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
                  filmsSameGenre = {filmsCount}
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

export {App};
export default connector(App);

// export default App;
