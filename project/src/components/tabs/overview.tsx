/*eslint-disable no-console*/
import { FilmStructure } from '../../types/filmCards';

type cardParameters = {
  detailedCardStructure: FilmStructure;
};

function Overview(props: cardParameters): JSX.Element {
  const { detailedCardStructure } = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{detailedCardStructure.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">
            {detailedCardStructure.scoresCount} ratings
          </span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{detailedCardStructure.description}</p>

        <p className="film-card__director">
          <strong>Director: {detailedCardStructure.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {detailedCardStructure.starring}
            and other
          </strong>
        </p>
      </div>

      {}
    </>
  );
}

export default Overview;
