import axios from "axios";
import movieSlice from "../movieSlice"

const movieActions = movieSlice.actions;

export default function movieMiddleware(pageNo){
  return async function(dispatch){
    try{
      dispatch(movieActions.moviesLoading());
      const resp = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`,
      );
      dispatch(movieActions.moviesData(resp.data.results));
    }catch(e){
      dispatch(movieActions.moviesError());
    }
  }
}