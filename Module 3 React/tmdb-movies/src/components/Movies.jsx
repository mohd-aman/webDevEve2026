import { useState } from "react";
import MovieCard from "./MovieCard";
import {
  updateLocalStorageWatchList,
  getWatchListFromLocalStorage,
} from "../utility/moviesUtility";

export default function Movies({ moviesList }) {
  const [watchList, setWatchList] = useState(getWatchListFromLocalStorage);

  const handleAddToWatchList = (movieToAdd) => {
    const updatedWatchList = [...watchList];
    updatedWatchList.push(movieToAdd);
    updateLocalStorageWatchList(updatedWatchList);
    setWatchList(updatedWatchList);
    // setWatchList([...watchList, movieToAdd]);
  };

  const handleRemoveFromWatchList = (id) => {
    const filteredWatchList = watchList.filter((movie) => movie.id !== id);
    updateLocalStorageWatchList(filteredWatchList);
    setWatchList(filteredWatchList);
  };

  const checkInWatchList = (id) => {
    return watchList.find((movie) => id === movie.id);
  };

  return (
    <section className="p-4">
      <h3 className="font-extrabold text-3xl text-center p-4">
        Trending Movies
      </h3>
      <div className="flex flex-wrap gap-8 justify-evenly">
        {moviesList.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFav={checkInWatchList(movie.id)}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          );
        })}
      </div>
    </section>
  );
}
