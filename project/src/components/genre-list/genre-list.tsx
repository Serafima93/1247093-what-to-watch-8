/*eslint-disable no-console*/
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { changeGenre, resetFilms } from '../../store/actions';
import { State } from '../../types/state';
import { Actions } from '../../types/actions';

// import { films } from '../../mocks/films';

type FilmGenre = {
  filmGenre: string;
};

const mapStateToProps = ({ genreFromState, filmListFromState }: State) => ({
  genreFromState,
  filmListFromState,
  resetFilms,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onChangeActiveGenre: changeGenre,
      onResetFilmList: resetFilms,
      // onChangeFilmList: changeFilmList,
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
    // onChangeFilmList,
    // genreFromState,
  } = props;

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
            // onChangeFilmList();
            // запихиваю новое колличество фильмов в представление
            // Почему то у меня не обновляется хранилище по ресету/ уже скопировала массив
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
