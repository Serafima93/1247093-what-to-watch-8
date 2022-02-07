/* eslint-disable jsx-a11y/anchor-is-valid */
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/actions';
import { changeTabs } from '../../store/actions';
import { State } from '../../types/state';

type TabMeaning = {
  tabMeaning: string;
};

const mapStateToProps = ({ tabFromState }: State) => ({
  tabFromState,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onChangeTabs: changeTabs,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & TabMeaning;

function Tab(props: ConnectedComponentProps): JSX.Element {
  const { tabMeaning, onChangeTabs, tabFromState } = props;

  return (
    <>
      <li
        className={
          tabMeaning === tabFromState
            ? 'film-nav__item film-nav__item--active'
            : 'film-nav__item'
        }
      >
        <a
          // href="#"
          className="film-nav__link"
          onClick={() => {
            onChangeTabs(tabMeaning);
          }}
        >
          {tabMeaning}
        </a>
      </li>
      {}
    </>
  );
}

export { Tab };
export default connector(Tab);
