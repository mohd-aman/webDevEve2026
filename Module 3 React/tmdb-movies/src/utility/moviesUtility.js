import { ALL_GENRE, MOVIE_GENRE_MAPPING } from "./constants";
const basePath = "https://image.tmdb.org/t/p/original";
const localStorageKey = "watchList";

export const urlToPosterPath = (url) => {
  return `${basePath}${url}`;
};

export const updateLocalStorageWatchList = (list) => {
  localStorage.setItem(localStorageKey, JSON.stringify(list));
};

export const getWatchListFromLocalStorage = () => {
  const watchList = localStorage.getItem(localStorageKey);
  if (watchList) {
    return JSON.parse(watchList);
  }
  return [];
};

export const getGenreFromId = (genre_id) => {
  const genreObj = MOVIE_GENRE_MAPPING.find(
    (genre_obj) => genre_obj.id === genre_id,
  );
  return genreObj.name;
};

export const filterBasedOnGenre = (movieList, selectedGenre) => {
  if (selectedGenre === ALL_GENRE) return movieList;
  return movieList.filter((movieObj) => {
    const currentMovieGenre = getGenreFromId(movieObj.genre_ids[0]);
    return selectedGenre === currentMovieGenre
  });
};
