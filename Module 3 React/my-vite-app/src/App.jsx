import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import MyComponent from './components/MyComponent'

function App() {
  return <div>
    <MyComponent message={"Hello, I'm being passed as props"}/>
    <MyComponent message={"Same component with different message"}/>
    <MyComponent message={"Nothing"}/>
  </div>
}

export default App