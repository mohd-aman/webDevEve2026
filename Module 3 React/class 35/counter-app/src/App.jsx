import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import User from './data/User'
import ProductList from './components/ProductList'
import Products from './data/Product'

function App() {
  return(
    <div>
      <Counter/>
      <UserCard user={User} />  
      <ProductList products={Products}/>
    </div>
  )
}

export default App
