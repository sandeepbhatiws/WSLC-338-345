import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import Header from './Components/Header'
import AboutUs from './Components/AboutUs'
import './assets/css/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <AboutUs/>
    {/* <Home></Home> */}

  </StrictMode>,
)
