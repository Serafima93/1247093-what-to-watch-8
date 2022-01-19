/* eslint-disable jsx-a11y/anchor-is-valid */
/*eslint-disable no-console*/
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/actions';
import { changeTabs } from '../../store/actions';
import { useState } from 'react';

type TabMeaning = {
  tabMeaning: string;
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) =>
  bindActionCreators(
    {
      onChangeTabs: changeTabs,
    },
    dispatch,
  );

const connector = connect(mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & TabMeaning;

function Tab(props: ConnectedComponentProps): JSX.Element {
  const { tabMeaning, onChangeTabs } = props;
  const [isPushing, setIsPushing] = useState(false);

  return (
    <>
      <li
        className={
          isPushing === true ? 'film-nav__item--active' : 'film-nav__item'
        }
      >
        <a
          // href="#"
          className="film-nav__link"
          onClick={() => {
            setIsPushing(true);
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
