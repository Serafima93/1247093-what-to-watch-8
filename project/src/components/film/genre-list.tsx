/*eslint-disable no-console*/
type FilmGenre = {
  filmGenre: string;
};

function FilmGenreList(props: FilmGenre): JSX.Element {
  const { filmGenre } = props;
  //     /*catalog__genres-item--active*/

  return (
    <>
      <li className="catalog__genres-item">
        <a
          href="#s"
          className="catalog__genres-link"
          onClick={() => {
            console.log(filmGenre);
          }}
        >
          {filmGenre}
        </a>
      </li>

      {/* <div className="catalog__films-list">
        {filmsCount.map((film: FilmStructure) => (
          <FilmCard cardStructure={film} key={film.id + 1} />
        ))}
      </div> */}
      {}
    </>
  );
}

export default FilmGenreList;
