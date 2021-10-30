/*eslint-disable no-console*/
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { changeGenre } from '../../store/actions';
import { State } from '../../types/state';
import { Actions } from '../../types/actions';

type FilmGenre = {
  filmGenre: string;
};

const mapStateToProps = ({ genre }: State) => ({
  genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onChangeActiveGenre: changeGenre,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmGenre;

function FilmGenreList(props: ConnectedComponentProps): JSX.Element {
  const { filmGenre, onChangeActiveGenre } = props;
  /*catalog__genres-item--active*/

  return (
    <>
      <li className="catalog__genres-item">
        <a
          href="#s"
          className="catalog__genres-link"
          onClick={() => {
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
