/*eslint-disable no-console*/
import { FilmStructure } from '../../types/filmCards';
import { FilmsCountForView } from '../../consts';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions } from '../../types/actions';
import { connect, ConnectedProps } from 'react-redux';
import { changeFilmsCount } from '../../store/actions';

type Films = {
  films: FilmStructure[];
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onChangeMoreFilms: changeFilmsCount,
    },
    dispatch,
  );

const connector = connect(mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Films;

function ShowMoreButton(props: ConnectedComponentProps): JSX.Element {
  const { films, onChangeMoreFilms } = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          const FilmsPerStep = films.slice(FilmsCountForView.Max, FilmsCountForView.Max + FilmsCountForView.Step);
          console.log(FilmsPerStep);
          onChangeMoreFilms(2);
        }}
        // // onClick={

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
