import userSlice from "../userSlice"

const actions = userSlice.actions;

export default function userMiddleware(){
  return async function(dispatch){
    try{
      dispatch(actions.setLoading());
      const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await resp.json();
      dispatch(actions.setUser(data));
    }catch(e){
      dispatch(actions.setError());
    }
  } 
}