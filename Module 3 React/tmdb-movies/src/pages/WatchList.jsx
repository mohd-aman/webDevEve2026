import React, { useEffect, useState } from "react";
import {
  getWatchListFromLocalStorage,
  getGenreFromId,
  filterBasedOnGenre,
  filterBasedOnSearch
} from "../utility/moviesUtility";
import { ALL_GENRE } from "../utility/constants";

function WatchList() {
  const [watchList, setWatchList] = useState(getWatchListFromLocalStorage);
  const [selectedGenre,setSelectedGenre] = useState(ALL_GENRE);
  const [search,setSearch] = useState("");

  // [...new Set(numbers)]
  const genre_list = new Set(watchList.map((movie)=>getGenreFromId(movie.genre_ids[0])))
  // console.log(genre_list);

  const handleGenreSelect = (genre)=>{
    setSelectedGenre(genre);
  }

  const handleSortingAsc = ()=>{
    const watchListCopy = [...watchList]
    watchListCopy.sort((movie1,movie2)=>{
      return movie1.vote_average - movie2.vote_average;
    })
    setWatchList(watchListCopy);
  }

  const handleSortingDes = ()=>{
    const watchListCopy = [...watchList]
    watchListCopy.sort((movie1,movie2)=>{
      return movie2.vote_average - movie1.vote_average;
    })
    setWatchList(watchListCopy);
  }

  const Genre = () => (
    <div className="flex justify-center m-4">
      {[ALL_GENRE, ...genre_list].map((genre) => {
        const isActive = genre === selectedGenre;
        const baseStyles =
          "flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white font-bold mx-4 hover:cursor-pointer";
        const bgColor = isActive ? "bg-blue-400" : "bg-gray-400/50";
        return (
          <div
            onClick={() => handleGenreSelect(genre)}
            className={`${baseStyles} ${bgColor}`}
          >
            {genre}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Genre />

      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movie"
          className="h-12 w-[18rem] bg-gray-200 px-4 outline-none border border-gray-300"
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <div>
                    <i
                      onClick={handleSortingAsc}
                      className="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"
                    ></i>
                    Ratings
                    <i
                      onClick={handleSortingDes}
                      className="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"
                    ></i>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filterBasedOnSearch(filterBasedOnGenre(watchList,selectedGenre),search).map((movie) => (
              <tr className="hover:bg-gray-50" key={movie.id}>
                <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                  <img
                    className="h-24 w-40 object-fit object-cover rounded-r-lg"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                  />
                  <div className="font-medium text-gray-700 text-sm">
                    {movie.title}
                  </div>
                </td>
                <td className="pl-6 py-4">{movie.vote_average}</td>
                <td className="pl-6 py-4">{movie.popularity}</td>
                <td className="pl-2 py-4">
                  {getGenreFromId(movie.genre_ids[0])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default WatchList;
