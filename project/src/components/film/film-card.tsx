/*eslint-disable no-console*/

import { useState } from 'react';
import { useHistory /*, Link Route, BrowserRouter*/ } from 'react-router-dom';
import { AppRoute } from '../../consts';
import FilmDetailPage from '../film/film-detail';

import { FilmStructure } from '../../types/filmCards';

type cardParameters = {
  cardStructure: FilmStructure;
};

function FilmCard(props: cardParameters): JSX.Element {
  const [userMouse, setUserMouse] = useState('');
  const history = useHistory();

  const { cardStructure } = props;
  cardStructure.name = userMouse;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        setUserMouse(cardStructure.name);
      }}
      onClick={() => {
        // не понятно как передать конкретный фильм дальше понятно что по id

        history.push(AppRoute.Film+cardStructure.id);
        <FilmDetailPage detailedCardStructure={cardStructure} />;

        // <Link to={AppRoute.Film+cardStructure.id} />;
      }}
    >
      <div className="small-film-card__image">
        <img
          src={cardStructure.posterImage}
          alt={cardStructure.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {cardStructure.name}
        </a>
      </h3>
    </article>
  );
}

export default FilmCard;
