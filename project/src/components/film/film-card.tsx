import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FilmStructure } from '../../types/filmCards';
import VideoPlayer from '../player/video-player';
import CardImage from './card-image';

type cardParameters = {
  cardStructure: FilmStructure;
};


function FilmCard(props: cardParameters): JSX.Element {
  const [userMouse, setUserMouse] = useState('');
  const history = useHistory();
  const [isVisibleFilmInfo, setVisibleFilmInfo] = useState(true);

  const { cardStructure } = props;

  return (
    <>
      <article
        className="small-film-card catalog__films-card"
        onMouseEnter={() => {
          setUserMouse(userMouse);
          setTimeout(() => {
            setVisibleFilmInfo((prevState) => !prevState);
          }, 1000);
        }}
        onMouseLeave={() => {
          setVisibleFilmInfo(!isVisibleFilmInfo);
        }}
        onClick={() => {
          history.push(`/films/${cardStructure.id}`);
        }}
      >
        <div className="small-film-card__image">
          {isVisibleFilmInfo ? (
            <CardImage cardStructure={cardStructure} />
          ) : (
            <VideoPlayer playerStructure={cardStructure} />
          )}
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
            {cardStructure.name}
          </a>
        </h3>
      </article>
      {}
    </>
  );
}

export default FilmCard;
