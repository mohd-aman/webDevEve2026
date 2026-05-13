import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Users from './poc/Users.jsx';
import { Nav,About, Listing, Home, PageNotFound } from './poc/Routing'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element = {<App />}/>
      <Route path='/about/*' element={<About/>}/>
      <Route path='/product-listing' element={<Navigate to='/listing'/>}/>
      <Route path='/listing' element={<Listing/>}/>  
      <Route path='/users/:id' element={<Users/>}/>
      <Route path='*' element={<PageNotFound/>}/>    
    </Routes>
  </BrowserRouter>
)
