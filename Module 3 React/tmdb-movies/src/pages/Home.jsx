import axios from "axios";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Movies from "../components/Movies";
import Pagination from "../components/Pagination";
import { useContext } from "react";
import PaginationContext from "../context/PaginationContext";
import MovieContext from "../context/MovieContext";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const {pageNo} = useContext(PaginationContext);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`,
      );
      // console.log(resp.data);
      const updatedMovieList = resp.data.results;
      setMoviesList(updatedMovieList);
    };
    fetchData();
  }, [pageNo]); //run cb on mount

  return (
    <div>
      {moviesList && moviesList.length === 0 && (
        <h2 className="text-center text-2xl">Loading Movies ...</h2>
      )}
      {moviesList.length > 0 && (
        <div>
          <Banner url={moviesList[0].poster_path} title={moviesList[0].title}  />
          <MovieContext.Provider value={moviesList} >
            <Movies />
          </MovieContext.Provider>
          <Pagination/>
        </div>
      )}
    </div>
  );
}
