/*eslint-disable no-console*/
import { FilmStructure } from '../../types/filmCards';
import { FilmsCountForView } from '../../consts';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions } from '../../types/actions';
import { connect, ConnectedProps } from 'react-redux';
import { changeFilmsCount, resetFilms } from '../../store/actions';

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
      onResetFilmList: resetFilms,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Films;

function ShowMoreButton(props: ConnectedComponentProps): JSX.Element {
  const { films, onChangeMoreFilms /*, onResetFilmList*/ } = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          const FilmsPerStep = films.slice(FilmsCountForView.Min, FilmsCountForView.Max + FilmsCountForView.Step);
          // onResetFilmList();
          console.log(FilmsPerStep);
          onChangeMoreFilms(FilmsPerStep);
        }}
        // // onClick={
        /*
        Получаем массив
        Добавляем новые фильмы по шагу
        Передаем их в редьюсер


        */


        //   films
        //   .slice(this._renderedFilmCount, this._renderedFilmCount + this._renderedFilmCount)
        //   .forEach((film) => {
        //     this._renderFilm(filmCardContainers, film);
        //   });
        // this._renderedFilmCount += this._renderedFilmCount;
        // if (this._renderedFilmCount >= this._getFilms().length) {
        //   remove(this._loadMoreButtonComponent);
        // }
        // }
      >
        Show more
      </button>
    </div>
  );
}

export {ShowMoreButton};
export default connector(ShowMoreButton);
