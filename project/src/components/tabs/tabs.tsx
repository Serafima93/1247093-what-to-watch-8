/*eslint-disable no-console*/
import Logo from '../logo/logo';
import { FilmStructure } from '../../types/filmCards';
import { FilmComment } from '../../types/filmCards';
import { TabsSections } from '../../consts';
import Details from './details';
import Reviews from './reviews';
// import Overview from './overview';
import { Tab } from './tab';
import FilmCard from '../film/film-card';
import { FilmsCountForView } from '../../consts';


type cardParameters = {
  detailedCardStructure: FilmStructure;
  filmsSameGenre: FilmStructure[];
};

type userReviewParameters = {
  reviewStructure: FilmComment;
  reviewCount: FilmComment[];
};

function Tabs(props: cardParameters & userReviewParameters): JSX.Element {
  const {
    detailedCardStructure,
    reviewStructure,
    reviewCount,
    filmsSameGenre,
  } = props;

  console.log(filmsSameGenre);

  const tabsSectionsArray = Object.values(TabsSections);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={detailedCardStructure.previewImage}
              alt={detailedCardStructure.name}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

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
                <a className="user-block__link" href="a">
                  Sign out
                </a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{detailedCardStructure.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">
                  {detailedCardStructure.genre}
                </span>
                <span className="film-card__year">
                  {detailedCardStructure.released}
                </span>
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
                <a href="add-review.html" className="btn film-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={detailedCardStructure.posterImage}
                alt={detailedCardStructure.name} /*'poster' - как добавить? */
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {tabsSectionsArray.map((tab: string) => (
                    <Tab tabMeaning={tab} key={tab + 1} />
                  ))}
                </ul>
              </nav>
              {/* Как правильно  - создать отдельные кнопки или их как-то массивом? и как их потом соединять с компонентом?*/}

              {/* {isPushing === true && (
                <Overview detailedCardStructure={detailedCardStructure} />
              )} */}
              <Details detailedCardStructure={detailedCardStructure} />
              <Reviews
                reviewCount={reviewCount}
                reviewStructure={reviewStructure}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {/* вынести ли в единую функцию? Оптимизация. Подключения наноида? Убирать ли дубли? */}

            {filmsSameGenre
              .filter((item) => item.genre === detailedCardStructure.genre)
              .slice(FilmsCountForView.Min, FilmsCountForView.Max)
              .map((film: FilmStructure) => (
                <FilmCard cardStructure={film} key={film.id + 1 + 4} />
              ))}
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

export default Tabs;
