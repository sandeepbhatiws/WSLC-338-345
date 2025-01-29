import React, { useEffect, useState } from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import axios from 'axios'

export default function Home() {

  // fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(console.log);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://wscubetech.co/ecommerce-api/products.php',{
      params : {
        limit : 28
      }
    })
    .then((result) => {
      setProducts(result.data.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[])
  

  return (
    <>
        <div className="container bg-white">
            
            {/* <Header/> */}

            <div className='text-center p-4'>
                <h1>All Products</h1>
            </div>

            <div className="row">
                {
                  products.map((data, index) => {
                    return(
                      <ProductCard productData = {data} key={index}/>
                    )
                  })
                }
                
            </div>
        </div>
    </>
  )
}
