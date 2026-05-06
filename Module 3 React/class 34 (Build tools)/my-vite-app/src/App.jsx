import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import MyComponent from './components/MyComponent'
import DisplayData from './components/DisplayData'
import ConditionalRendering from './components/ConditionalRendering'
import Button from './components/Button'
import Greeting from './components/Greeting'

function App() {
  //Define an Array and Object to pass as props;
  const fruits = ['Apple','Banana','Cherry'];
  const person = {
    name:"Mike",
    age:35
  }
  const isLoggedIn = false;
  const userName = 'JohnDoe'
  return <div>
    <MyComponent message={"Hello, I'm being passed as props"}/>
    <MyComponent message={"Same component with different message"}/>
    <MyComponent message={"Nothing"}/>
    <DisplayData person={person} fruits={fruits}/>
    <ConditionalRendering isLoggedIn={isLoggedIn} userName={userName}/>
    <ConditionalRendering isLoggedIn={true} userName={"Mike"}/>
    <Button/>
    <Greeting age={35} occupation={"SDE 2"}/>
  </div>
}

export default App