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
import Todo from './components/Todo'
import Form from './components/Form'
import FormV2 from './components/FormV2'
import TempInput from './components/TempInput'
import TempDisplay from './components/TempDisplay'

function App() {
  const [temperature, setTemperature] = useState("");
  return(
    <div>
      <TempInput temperature={temperature} setTemperature={setTemperature}/>
      <TempDisplay temperature={temperature}/>
      {/* <Form/> */}
      {/* <FormV2/> */}
      {/* <Counter/>
      <UserCard user={User} />  
      <ProductList products={Products}/>
      <Todo/> */}
    </div>
  )
}

export default App
