import { useContext } from "react"
import PaginationContext from "../context/PaginationContext"
import { useDispatch, useSelector } from "react-redux"
import paginationSlice from "../redux/paginationSlice";

const pagnitionActions = paginationSlice.actions;

export default function Pagination(){
  const {pageNo} = useSelector((store)=>store.paginationState);
  const dispatch = useDispatch();
  return(
    <section className="mt-4 bg-gray-400 flex p-2 gap-8 justify-center text-2xl font-extrabold ">
      <div onClick={()=>dispatch(pagnitionActions.handlePrev())}  className="cursor-pointer"><i class="fa-solid fa-arrow-left"></i></div>
      <div>{pageNo}</div>
      <div onClick={()=>dispatch(pagnitionActions.handleNext())} className="cursor-pointer" ><i class="fa-solid fa-arrow-right"></i></div>
    </section>
  )
}