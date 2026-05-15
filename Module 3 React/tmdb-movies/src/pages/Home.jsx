import Banner from "../components/Banner";
import Movies from "../components/Movies";
import Pagination from "../components/Pagination";

export default function Home(){
  return(
    <div>
      <Banner/>
      <Movies/>
      <Pagination/>
    </div>
  )
}