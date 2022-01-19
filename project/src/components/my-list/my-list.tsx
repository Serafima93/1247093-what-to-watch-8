import Footer from '../footer/footer';
import Header from '../header/header';

import FilmCard from '../film/film-card';
import { FilmStructure } from '../../types/filmCards';

type MyListScreenProps = {
  filmsCount: FilmStructure[];
};

function MyList(props: MyListScreenProps): JSX.Element {
  const { filmsCount } = props;

  return (
    <>
      <div className="user-page">
        <Header/>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            {filmsCount.map((film: FilmStructure) => (
              <FilmCard cardStructure={film} key={film.id} />
            ))}
          </div>
        </section>
        <Footer/>
      </div>
      {}
    </>
  );
}

export default MyList;
