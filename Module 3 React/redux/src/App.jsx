import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterRedux from './components/CounterRedux'
import {Provider} from "react-redux";
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <CounterRedux/>
    </Provider>
  )
}

export default App
