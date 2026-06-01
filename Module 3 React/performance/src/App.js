import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
// import Homepage from './components/Homepage';
// import Contactpage from './components/Contactpage';
// import Aboutpage from './components/Aboutpage';

function App() {
  const [HomePage,setHomePage] = useState(null);
  const [AboutPage,setAboutPage] = useState(null);
  const [ContactPage,setContactPage] = useState(null);

  useEffect(()=>{
    //dynamically load the Home page component
    import('./components/Homepage').then((module)=>{
      setHomePage(()=>module.default);
    })
  },[]);

  const loadAboutPage = ()=>{
    import('./components/Aboutpage').then((module)=>{
      setAboutPage(()=>module.default)
    })
  }

  const loadContactPage = ()=>{
    import('./components/Contactpage').then((module)=>{
      setContactPage(()=>module.default)
    })
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar loadAboutPage={loadAboutPage} loadContactPage={loadContactPage}/>
        <Routes>
          <Route path='/' element={HomePage?<HomePage/>:<div>Loading...</div>}/>
          <Route path='/contact' element={ContactPage?<ContactPage/>:<div>Loading...</div>}/>
          <Route path='/about' element={AboutPage?<AboutPage/>:<div>Loading...</div>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
