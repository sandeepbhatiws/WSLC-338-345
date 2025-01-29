import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './assets/css/style.css';
import './assets/css/responsive.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import ProductCard from './Components/ProductCard';
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';
import Rootlayout from './Components/Rootlayout';
import ContextAPI from './ContextAPI/ContextAPI';
import Cart from './Components/Cart';

ReactDOM.createRoot(document.getElementById('root')).render(

  <ContextAPI>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path='product-listings/:slug?' element={ <ProductListing/> } />
        <Route path='product-details/:id' element={ <ProductDetail/> } /> */}


        <Route element={<Rootlayout/>}>
          <Route path="/" element={<Home />} />
          <Route path='product-listings/:slug?' element={ <ProductListing/> } />
          <Route path='product-details/:id' element={ <ProductDetail/> } />
          <Route path='cart' element={<Cart/>} />
        </Route>

        


        <Route path='admin-panel' element={<Rootlayout/>}>

          <Route path='categories'>
            <Route path="add" element={<Home />} />
            <Route path="view" element={<Home />} />
          </Route>

          <Route path="products/add" element={<Home />} />
          <Route path="products/view" element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </ContextAPI>

  
)
