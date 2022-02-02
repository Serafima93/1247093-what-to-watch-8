export function adaptToClient(film) {
  const adaptedFilm = Object.assign(
    {},
    film,
    {
      backgroundColor: film.background_color,
      backgroundImage: film.background_image,
      description: film.description,
      director: film.director,
      genre: film.genre,
      id: film.id,
      isFavorite: film.is_favorite,
      name: film.name,
      posterImage: film.poster_image,
      previewImage: film.preview_image,
      previewVideoLink: film.preview_video_link,
      rating: film.rating,
      released: film.released,
      runTime: film.run_time,
      scoresCount: film.scores_count,
      starring: film.starring,
      videoLink: film.video_link,
    },
  );

  // Ненужные ключи мы удаляем
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.run_time;
  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.video_link;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.background_color;
  delete adaptedFilm.background_image;
  delete adaptedFilm.scores_count;

  return adaptedFilm;
}

