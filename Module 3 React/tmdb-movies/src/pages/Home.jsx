import axios from "axios";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Movies from "../components/Movies";
import Pagination from "../components/Pagination";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [pageNo,setPageNo] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`,
      );
      console.log(resp.data);
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
          <Movies moviesList={moviesList} />
          <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
        </div>
      )}
    </div>
  );
}
