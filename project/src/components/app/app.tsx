import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../consts';
import MainPage from '../main/main';

import AddReview from '../addReview/addReview';
import FilmCard from '../film/film';
import Login from '../login/login';
import MyList from '../myList/myList';
import Player from '../player/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AppScreenProps = {
  filmsCount: number[];
  filmName: string;
  filmType: string;
  filmDate: number;
};

// function App(props: AppScreenProps): JSX.Element {
//   const { filmsCount, filmName, filmType, filmDate } = props;

//   return (
//     <MainPage
//       filmsCount={filmsCount}
//       filmName={filmName}
//       filmType={filmType}
//       filmDate={filmDate}
//     />
//   );
// }

function App(props: AppScreenProps): JSX.Element {
  const { filmsCount, filmName, filmType, filmDate } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage
            filmsCount={filmsCount}
            filmName={filmName}
            filmType={filmType}
            filmDate={filmDate}
          />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
        <Route exact path={AppRoute.Film}>
          <FilmCard />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
