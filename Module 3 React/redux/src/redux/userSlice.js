import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:"userSlice",
  initialState:{
    user:null,
    loading:true,
    error:false
  },
  reducers:{
    setError:(state)=>{
      state.error = true;
      state.loading = false;
      state.user = null;
    },
    setLoading:(state)=>{
      state.error = false;
      state.loading = true;
      state.user = null;
    },
    setUser:(state,descObj)=>{
      state.error = false;
      state.loading = false;
      state.user = descObj.payload;
    }
  }
})

export default userSlice;