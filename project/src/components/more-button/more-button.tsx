/*eslint-disable no-console*/
import { FilmStructure } from '../../types/filmCards';
import { FilmsCountForView, ButtonCondition } from '../../consts';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions } from '../../types/actions';
import { connect, ConnectedProps } from 'react-redux';
import { changeFilmsCount, resetFilms, loadMoreFilms } from '../../store/actions';
// import { useEffect } from 'react';

type Films = {
  films: FilmStructure[];
};
const mapStateToProps = () => ({
  resetFilms,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onChangeMoreFilms: changeFilmsCount,
      onLoadMoreFilms: loadMoreFilms,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Films;

function ShowMoreButton(props: ConnectedComponentProps): JSX.Element {
  const { films, onChangeMoreFilms, onLoadMoreFilms } = props;
  // useEffect(() => console.log('Hello from useEffect2'));
  // const [isVisibleFilmButton, setVisibleFilmButton] = useState(true);
  // console.log(isVisibleFilmButton);

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          const FilmsPerStep = films.slice(FilmsCountForView.Min, FilmsCountForView.Max + FilmsCountForView.Step);
          onChangeMoreFilms();
          if (FilmsPerStep.length >= films.length) {onLoadMoreFilms(ButtonCondition.Blocked);}
        }}
        // if (this._renderedFilmCount >= this._getFilms().length) {
        //   remove(this._loadMoreButtonComponent);
      >
        Show more
      </button>
    </div>
  );
}

export {ShowMoreButton};
export default connector(ShowMoreButton);
