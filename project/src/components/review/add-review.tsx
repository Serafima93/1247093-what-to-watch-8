/*eslint-disable no-console*/
import Logo from '../logo/logo';
// import Header from '../header/header';

import { useState, ChangeEvent } from 'react';

function AddReview(): JSX.Element {
  const stars = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  const [userAnswers, setUserComment] = useState('Review text');
  const [userRating, setChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img
              src="img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel"
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="film-page.html" className="breadcrumbs__link">
                    The Grand Budapest Hotel
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href = 'd'>Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" href ='d'>Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>
        </div>
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
                        checked={userRating[id]}
                        onChange={({
                          target,
                        }: ChangeEvent<HTMLInputElement>) => {
                          const value = target.checked;
                          const firstArrayPart = [...userRating.slice(0, id)];
                          const indexFirst = firstArrayPart.indexOf(true);
                          const secondArrayPart = [...userRating.slice(id)];
                          const indexSecond = secondArrayPart.indexOf(true);

                          if (indexFirst > 0) {
                            firstArrayPart[indexFirst] = false;
                          }
                          if (indexSecond > 0) {
                            secondArrayPart[indexSecond] = false;
                          }

                          const finalArray = [
                            ...firstArrayPart,
                            value,
                            ...secondArrayPart,
                          ];

                          setChecked(finalArray);
                          // тут нужна помощь. Почему стейт запаздывает? На один шаг и это мешает отрисовке
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
                {/* не поняла сюда тоже состояние  делать или как? */}
                <button className="add-review__btn" type="submit">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {}
    </>
  );
}

export default AddReview;
