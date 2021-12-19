/*eslint-disable no-console*/
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { changeGenre, resetFilms } from '../../store/actions';
import { State } from '../../types/state';
import { Actions } from '../../types/actions';

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
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmGenre;

function FilmGenreList(props: ConnectedComponentProps): JSX.Element {
  const { filmGenre, onChangeActiveGenre, onResetFilmList, genreFromState } =
    props;

  return (
    <>
      <li className={filmGenre === genreFromState ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}>
        <a href="#s" className="catalog__genres-link"
          onClick={() => {
            onResetFilmList();
            onChangeActiveGenre(filmGenre);
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
