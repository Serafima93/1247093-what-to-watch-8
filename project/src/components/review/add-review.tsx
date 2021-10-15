import { useState } from 'react';

function AddReview(): JSX.Element {
  const stars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  const [userAnswers, setUserComment] = useState('Review text');
  const [count, setText] = useState('Review text');

  return (
    <>
      <div className="add-review">
        <form action="#" className="add-review__form">

          <div className="rating">
            <div className="rating__stars">
              {stars.map((id) => {
                const keyValue = `${id}`;
                return (
                  <>
                    <input
                      key={keyValue}
                      className="rating__input"
                      id={`star-${id}`}
                      type="radio"
                      name="rating"
                      value={id}
                      onClick={() => {
                        setText(count + 1);
                      }}
                    />
                    <label className="rating__label" htmlFor={`star-${id}`}>
                      {`Rating-${id}`}
                    </label>
                    {}
                  </>
                );
              })}
            </div>
          </div>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder={userAnswers}
              onChange={({ target }) => {
                const value = target.value;
                setUserComment(value);
              }}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
      {}
    </>
  );
}

export default AddReview;
