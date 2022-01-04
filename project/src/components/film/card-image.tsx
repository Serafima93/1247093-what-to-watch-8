import { FilmStructure } from '../../types/filmCards';

type cardParameters = {
  cardStructure: FilmStructure;
};

function CardImage(props: cardParameters): JSX.Element {
  const { cardStructure } = props;

  return (
    <>
      <div className="small-film-card__image">
        <img
          src={cardStructure.posterImage}
          alt={cardStructure.name}
          width="280"
          height="175"
        />
      </div>
      {}
    </>
  );
}

export default CardImage;
