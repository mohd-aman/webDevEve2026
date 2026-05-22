import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import WatchList from "./pages/WatchList.jsx";
import PaginationContext from "./context/PaginationContext.js";

function App() {
  const [pageNo, setPageNo] = useState(1);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PaginationContext.Provider value={{ pageNo, setPageNo }}>
              <Home />
            </PaginationContext.Provider>
          }
        />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
