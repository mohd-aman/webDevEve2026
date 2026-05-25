import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import userMiddleware from "../redux/middleware/userMiddleware";

export default function User(){
  const {user,loading,error} = useSelector((store)=>store.userState);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(userMiddleware());// dispatching a thunk
  },[])// on mount dispatch an action which brings user data

  if(error){
    return<h1>Error in loading ....</h1>
  }
  if(loading){
    return <h1>Loading ....</h1>
  }
  
  return(
    <h1>
      User: {user.name}
    </h1>
  )
}