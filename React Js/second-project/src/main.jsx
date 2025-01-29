import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Components/Counter.jsx'
import HideShow from './Components/hideShow.jsx'
import Home from './Components/Home.jsx'
import faqs from './data/faqs.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <HideShow/> */}
    {/* <Counter /> */}

    <Home faqs={faqs}/>
  </StrictMode>,
)
