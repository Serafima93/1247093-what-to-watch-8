import { FilmStructure } from '../../types/filmCards';

type cardParameters = {
  cardStructure: FilmStructure;
};


function FilmCard(props: cardParameters): JSX.Element {
  const { cardStructure } = props;

  return (
    <>
      <article className="small-film-card catalog__films-card">
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
      {}
    </>
  );
}

export default FilmCard;
