import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import WatchList from './pages/WatchList.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path="/" element = {<App />}/>
       <Route path="/watchlist" element={<WatchList/>}/>
    </Routes>
  </BrowserRouter>
)
