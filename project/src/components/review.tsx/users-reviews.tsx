import { FilmComment } from '../../types/filmCards';
import UserReview from './review';

type userReviewParameters = {
  reviewStructure: FilmComment;
  reviewCount: FilmComment[];
};

function UsersReview(props: userReviewParameters): JSX.Element {
  const { reviewStructure, reviewCount } = props;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewCount.map((review: FilmComment) => (
          <UserReview reviewStructure={review} key={review.user.id} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        <UserReview reviewStructure={reviewStructure} />
      </div>
    </div>
  );
}

export default UsersReview;
