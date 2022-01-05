/*eslint-disable no-console*/
import { useState } from 'react';

type TabMeaning = {
  tabMeaning: string;
};

function Tab(props: TabMeaning): JSX.Element {
  const { tabMeaning } = props;
  const [isPushing, setIsPushing] = useState(false);


  return (
    <>
      <li className={isPushing === true ? 'film-nav__item--active' : 'film-nav__item'}>
        <a
          href="#s"
          className="film-nav__link"
          onClick={() => {
            setIsPushing(true);
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
