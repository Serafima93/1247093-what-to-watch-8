
function ShowMoreButton(): JSX.Element {

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        // // onClick={

        //   films
        //   .slice(this._renderedFilmCount, this._renderedFilmCount + this._renderedFilmCount)
        //   .forEach((film) => {
        //     this._renderFilm(filmCardContainers, film);
        //   });
        // this._renderedFilmCount += this._renderedFilmCount;
        // if (this._renderedFilmCount >= this._getFilms().length) {
        //   remove(this._loadMoreButtonComponent);
        // }
        // }
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
