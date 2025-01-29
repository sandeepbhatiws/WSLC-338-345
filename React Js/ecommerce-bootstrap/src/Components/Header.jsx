import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { cartContext } from '../ContextAPI/ContextAPI';
import { ToastContainer } from 'react-toastify';

export default function Header() {

  const [categories, SetCategories] = useState([]);

  let { cartItems } = useContext(cartContext);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/categories.php')
    .then((result) => {
      SetCategories(result.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[]);

  return (
    <>
      <ToastContainer/>
      <div className='container-fluid shadow px-5 position-sticky top-0 bg-white z-2'>
        <nav class="navbar navbar-expand-md navbar-light bg-white ">
            <div class="container-fluid p-0"> 
              <Link class="navbar-brand text-uppercase fw-800" to="/">
                <img src='https://www.wscubetech.com/images/wscube-tech-logo-2.svg' width='200px'/>
              </Link> 
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
                <div class="collapse navbar-collapse" id="myNav">
                    <div class="navbar-nav ms-auto">

                      <Link class="nav-link active" aria-current="page" to="/product-listings">All</Link> 

                      {
                        categories.map((v,i) => {
                          return(
                            
                              (i < 8)
                              ?
                              <Link class="nav-link" to={ `/product-listings/${v.slug}` }>{ v.name }</Link> 
                              :
                              '' 
                          )
                        })
                      } 

                      <Link to="/cart" className='ms-3'>
                        <button type="button" class="btn btn-outline-primary position-relative">View Cart
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          { cartItems.length }
                        </span>
                        </button>
                      </Link>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    </>
  )
}
