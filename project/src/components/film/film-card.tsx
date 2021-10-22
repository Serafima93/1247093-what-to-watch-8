/*eslint-disable no-console*/

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FilmStructure } from '../../types/filmCards';
// import Player from '../player/player';

type cardParameters = {
  cardStructure: FilmStructure;
};

function FilmCard(props: cardParameters): JSX.Element {
  const [userMouse, setUserMouse] = useState('');
  const history = useHistory();

  const { cardStructure } = props;
  // cardStructure.name = userMouse;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        setUserMouse(userMouse);
        history.push(`/player/${cardStructure.id}`);
      }}
      onClick={() => {
        history.push(`/films/${cardStructure.id}`);
      }}
    >
      <div className="small-film-card__image">
        <img
          src={cardStructure.posterImage}
          alt={cardStructure.name}
          width="280"
          height="175"
        />
        {/* <video
          // autoPlay
          // controls
          width="280"
          height="175"
          src={cardStructure.videoLink}
          className="player__video"
          poster={cardStructure.posterImage}
        >
        </video> */}
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
