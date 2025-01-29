import React, { createContext, useState } from 'react'

var  cartContext = createContext();

export default function ContextAPI({children}) {

    var getCartItems = localStorage.getItem('cartItems');
    var getCartItems = JSON.parse(getCartItems);

    let [cartItems, setCartItems] = useState(getCartItems ? getCartItems : []);
    let [wishlistItems, setWishlistItems] = useState([]);

    var allData = {cartItems, setCartItems, wishlistItems, setWishlistItems};

  return (
    <>
        <cartContext.Provider value={ allData }>
            {children}
        </cartContext.Provider>
    </>
  )
}

export {cartContext };