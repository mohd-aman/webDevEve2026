import { useContext } from "react"
import PaginationContext from "../context/PaginationContext"

export default function Pagination(){
  const {pageNo,setPageNo} = useContext(PaginationContext);
  return(
    <section className="mt-4 bg-gray-400 flex p-2 gap-8 justify-center text-2xl font-extrabold ">
      {pageNo>1 && <div onClick={()=>setPageNo(pageNo-1)}  className="cursor-pointer"><i class="fa-solid fa-arrow-left"></i></div>}
      <div>{pageNo}</div>
      <div onClick={()=>setPageNo(pageNo+1)} className="cursor-pointer" ><i class="fa-solid fa-arrow-right"></i></div>
    </section>
  )
}