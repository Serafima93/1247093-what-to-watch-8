import FilmGenreList from '../genre-list/genre-list';
import FilmCard from '../film/film-card';
import Footer from '../footer/footer';
import Header from '../header/header';

import ShowMoreButton from '../more-button/more-button';
import { FilmStructure } from '../../types/filmCards';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { filmGenreArray } from '../../store/reducer';
import { useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions } from '../../types/actions';
import { loadMoreFilms } from '../../store/actions';
import { ButtonCondition } from '../../consts';

type filmParameters = {
  structure: FilmStructure;
};

// что принимает функция  - количество карточек и данные верхней

const mapStateToProps = ({
  filmListFromState,
  MaxFilms,
  MinFilms,
  LoadMoreFilms,
}: State) => ({
  filmListFromState,
  MaxFilms,
  MinFilms,
  LoadMoreFilms,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onLoadMoreFilms: loadMoreFilms,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & filmParameters;

function MainPage(props: ConnectedComponentProps): JSX.Element {
  const {
    structure,
    filmListFromState,
    MaxFilms,
    MinFilms,
    LoadMoreFilms,
    onLoadMoreFilms,
  } = props;

  const [isVisibleFilmButton, setVisibleFilmButton] = useState(LoadMoreFilms);
  if (isVisibleFilmButton !== LoadMoreFilms) {setVisibleFilmButton((prevState) => !prevState);}
  // корректно ли?

  // корректно ли? Ошибка в консоли/ и три раза вызов почему?
  if (MaxFilms >= filmListFromState.length) {onLoadMoreFilms(ButtonCondition.Blocked);}

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
        <Header/>

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
          <ul className="catalog__genres-list">
            {filmGenreArray.map((filmGenre: string) => (
              <FilmGenreList filmGenre={filmGenre} key={filmGenre + 1} />
            ))}
          </ul>

          <div className="catalog__films-list">
            {filmListFromState
              .slice(MinFilms, MaxFilms)
              .map((film: FilmStructure) => (
                <FilmCard cardStructure={film} key={film.id + 1} />
              ))}
          </div>
          {isVisibleFilmButton && <ShowMoreButton />}
        </section>
        <Footer/>

      </div>
      {}
    </>
  );
}

export { MainPage };
export default connector(MainPage);
