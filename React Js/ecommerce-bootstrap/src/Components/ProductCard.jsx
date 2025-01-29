import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../ContextAPI/ContextAPI';
import { toast } from 'react-toastify';

export default function ProductCard({ column, productData }) {

  let { cartItems, setCartItems } = useContext(cartContext);

  const addToCart = (product) => {

    var checkData = cartItems.filter((v) => {
      if(v.id == product.id){
        return v;
      }
    })

    if(checkData.length == 0){
      var data = {
        id: product.id,
        name: product.name,
        price : product.price,
        image : product.image,
        quantity : 1
      }
  
      var finalData = [data, ...cartItems];
      setCartItems(finalData);
      localStorage.setItem('cartItems', JSON.stringify(finalData));
      toast.success('Product add to cart successfully !');
    } else {

      var data = cartItems.map((v) => {
        if(v.id == product.id){
          v.quantity++;
          return v;
        } else {
          return v;
        }
      })

      var finalData = [...data];
      setCartItems(finalData);
      localStorage.setItem('cartItems', JSON.stringify(finalData));
      toast.success('Product update in cart successfully !');
    }

    
  }


  return (
    <>
        <div class={ (column == 4) ? 'col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3' : 'col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3' }>
          
            <div class="product">
              <img src={ productData.image } alt={ productData.name }/>
                <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
                    <li class="icon mx-3"><span class="far fa-heart"></span></li>
                    <li class="icon" onClick={ () => addToCart(productData) }><span class="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <Link to={ `/product-details/${productData.id}` } className='text-decoration-none text-black'>
              <div class="tag bg-red">{ productData.category_name }</div>
              <div class="title pt-4 pb-1">{ productData.name }</div>
              <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
              <div class="price">$ { productData.price }</div>
            </Link>
        </div>
    </>
  )
}
