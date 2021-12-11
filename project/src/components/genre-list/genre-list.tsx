/*eslint-disable no-console*/
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { changeGenre, resetFilms, changeFilmList } from '../../store/actions';
import { State } from '../../types/state';
import { Actions } from '../../types/actions';

import { films } from '../../mocks/films';

type FilmGenre = {
  filmGenre: string;
};

const mapStateToProps = ({ genre, filmList }: State) => ({
  genre,
  filmList,
  resetFilms,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onChangeActiveGenre: changeGenre,
      onResetFilmList: resetFilms,
      onChangeFilmList: changeFilmList,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmGenre;

function FilmGenreList(props: ConnectedComponentProps): JSX.Element {
  const {
    filmGenre,
    onChangeActiveGenre,
    onResetFilmList,
    // filmList,
    onChangeFilmList,
    // genre,
  } = props;


  const FilmByGenre = films.filter((item) => item.genre === filmGenre);

  return (
    <>
      <li className="catalog__genres-item">
        <a
          href="#s"
          className="catalog__genres-link"
          // добавить подчеркивание для выбранного фильма. Передать активный жанр?
          // genre === filmGenre ?  className="catalog__genres-link" : сlassName='catalog__genres-item--active'
          onClick={() => {
            onResetFilmList(); // скидываю список фильмов
            onChangeActiveGenre(filmGenre); // нахожу в фильмах подходящие жанры и из них делаю массив
            onChangeFilmList(FilmByGenre); // запихиваю новое колличество фильмов в представление
            // console.log(filmGenre); // то что прилетает по нажатию
            // console.log(FilmByGenre);
          }}
        >
          {filmGenre}
        </a>
      </li>
      {}
    </>
  );
}

export { FilmGenreList };
export default connector(FilmGenreList);
