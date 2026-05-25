import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Movies from "../components/Movies";
import Pagination from "../components/Pagination";
import { useContext } from "react";
import PaginationContext from "../context/PaginationContext";
import MovieContext from "../context/MovieContext";
import { useDispatch, useSelector } from "react-redux";
import movieMiddleware from "../redux/middleware/movieMiddleware";

export default function Home() {
  const {pageNo} = useSelector((store)=>store.paginationState);
  const {moviesList,loading, error} = useSelector((store)=>store.movieState);
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(movieMiddleware(pageNo));
  }, [pageNo]); //run cb on mount
  if(loading){
    return <h2 className="text-center text-2xl">Loading Movies ...</h2>
  }

  if(error){
    return <h2>OOPs... something went wrong</h2>
  }

  return (
    <div>
      {moviesList.length > 0 && (
        <div>
          <Banner url={moviesList[0].poster_path} title={moviesList[0].title}  />
            <Movies />
          <Pagination/>
        </div>
      )}
    </div>
  );
}
