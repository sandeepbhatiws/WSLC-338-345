import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Components/Home'
import './assets/css/style.css'
import RootLayout from './Components/RootLayout';
import Context from './ContextAPI/Context';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Context>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </Context>
        
    </BrowserRouter>,
)
