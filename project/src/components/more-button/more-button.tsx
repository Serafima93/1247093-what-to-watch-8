/*eslint-disable no-console*/
// import {  ButtonCondition } from '../../consts';
import { bindActionCreators, Dispatch } from 'redux';
import { Actions } from '../../types/actions';
import { connect, ConnectedProps } from 'react-redux';
import {changeFilmsCount, resetFilms, loadMoreFilms} from '../../store/actions';

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
type ConnectedComponentProps = PropsFromRedux;

function ShowMoreButton(props: ConnectedComponentProps): JSX.Element {
  const { onChangeMoreFilms } = props;


  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          // const FilmsPerStep = filteredFilms.slice(FilmsCountForView.Min, FilmsCountForView.Max + FilmsCountForView.Step );
          onChangeMoreFilms();
          // if (MaxFilms >= filteredFilms.length) {
          //   onLoadMoreFilms(ButtonCondition.Blocked);
          // }
        }}
      >
        Show more
      </button>
    </div>
  );
}

export { ShowMoreButton };
export default connector(ShowMoreButton);
