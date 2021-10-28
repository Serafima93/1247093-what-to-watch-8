/*eslint-disable no-console*/

import FilmGenreList from '../film/genre-list';
import FilmCard from '../film/film-card';
import Logo from '../logo/logo';
import { FilmStructure } from '../../types/filmCards';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../consts';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {resetFilms as resetFilmsState} from '../../store/actions';
import {Actions} from '../../types/actions';

type MainPageCard = {
  filmsCount: FilmStructure[];
};

type filmParameters = {
  structure: FilmStructure;
};

// что принимает функция  - количество карточек и данные верхней

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onResetFilms: resetFilmsState,
}, dispatch);

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & filmParameters & MainPageCard;


function MainPage(props: ConnectedComponentProps): JSX.Element {
  const { filmsCount, structure,  onResetFilms } = props;
  const history = useHistory();

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW </h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="s">
                Sign out {structure.genre}
              </a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{structure.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{structure.genre}</span>
                <span className="film-card__year">{structure.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => {
                    onResetFilms();
                    history.push(AppRoute.SignIn);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmGenreList/>
          <div className="catalog__films-list">
            {filmsCount.map((film: FilmStructure) => (
              <FilmCard cardStructure={film} key={film.id + 1} />
            ))}

          </div>

          <div className="catalog__more">
            <button
              className="catalog__button"
              type="button"
              onClick={() => history.push(AppRoute.MyList)}
            >
              Show more
            </button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
      {}
    </>
  );
}

export {MainPage};
export default connector(MainPage);
