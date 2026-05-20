import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import Home from "./pages/Home";
import Navbar from './components/Navbar.jsx'
import WatchList from './pages/WatchList.jsx'

function App() {
  const [pageNo,setPageNo] = useState(1);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home pageNo={pageNo} setPageNo={setPageNo} />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
