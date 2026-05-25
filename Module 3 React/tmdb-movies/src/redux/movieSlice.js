import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name:"movieSlice",
  initialState:{
    moviesList:[],
    error:false,
    loading:true,
  },
  reducers:{
    moviesLoading:(state)=>{
      state.moviesList = [];
      state.error = false;
      state.loading =true;
    },
    moviesError:(state)=>{
      state.moviesList =[];
      state.error = true;
      state.loading = false;
    },
    moviesData:(state,descObj)=>{
      state.moviesList = descObj.payload
      state.error = false;
      state.loading = false;
    }
  }
})

export default movieSlice;