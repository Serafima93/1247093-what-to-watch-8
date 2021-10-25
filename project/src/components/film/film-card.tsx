/*eslint-disable no-console*/
import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FilmStructure } from '../../types/filmCards';
import VideoPlayer from '../player/video-player';
import CardImage from './film';

type cardParameters = {
  cardStructure: FilmStructure;
};

function FilmCard(props: cardParameters): JSX.Element {
  const [userMouse, setUserMouse] = useState('');
  const history = useHistory();
  const [isVisibleFilmInfo, setVisibleFilmInfo] = useState(true);

  const { cardStructure } = props;

  const Ref = useRef<HTMLHtmlElement | null>(null);

  useEffect(() => {
    if (userMouse) {
      console.log(Ref.current);
    }
  }, [userMouse]);

  return (
    <>
      <article
        ref={Ref}
        className="small-film-card catalog__films-card"
        onMouseEnter={() => {
          setUserMouse(cardStructure.name);
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
