import React, { useContext, useEffect, useState } from 'react'
import '../assets/css/cart.css'
import { cartContext } from '../ContextAPI/ContextAPI'
import { toast } from 'react-toastify';

export default function Cart() {

    let { cartItems, setCartItems } = useContext(cartContext);

    let [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        var sum = 0;
        cartItems.forEach((v) => {
            sum += v.quantity * v.price
        })

        setTotalValue(sum);

    },[cartItems]);

    const quantityUpdate = (id, type) => {
        if(type == 'minus'){
            var finalData = cartItems.map((v) => {
                if(v.id == id){
                    if(v.quantity > 1){
                        v.quantity--;
                        toast.success('Cart update succesfully');
                        return v;
                    } else{
                        return v;
                    }
                    
                } else {
                    return v;
                }
            })

            setCartItems([...finalData]);
            localStorage.setItem('cartItems', JSON.stringify(finalData));

        } else {
            var finalData = cartItems.map((v) => {
                if(v.id == id){
                    if(v.quantity < 10){
                        v.quantity++;
                        toast.success('Cart update succesfully');
                        return v;
                    } else{
                        toast.error('Cart is full');
                        return v;
                        
                    }
                    
                } else {
                    return v;
                }
            })

            setCartItems([...finalData]);
            localStorage.setItem('cartItems', JSON.stringify(finalData));
        }

    }

    const deleteCart = (id) => {
        if(confirm('Are you sure you want to delete ?')){
            var finalData = cartItems.filter((v) => {
                if(v.id != id){
                    return v;
                }
            })
        }

        setCartItems([...finalData]);
        toast.success('Cart Delete Succesfully !!');
    }

    return (
        <>
            <div class="container py-3">
                <h3>Shopping Cart</h3>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                        {/* <!-- single cart item  --> */}
                        <hr />
                        <div class="cart-item py-2">
                            <div class="row">
                                {
                                    cartItems.map((v,i) => {
                                        return(
                                            <>
                                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                                <div class="d-flex justify-content-between mb-3">
                                                    <img
                                                        class="cart-image d-block"
                                                        src={v.image}
                                                        alt=""
                                                    />
                                                    <div class="mx-3">
                                                        <h5>{v.name}</h5>
                                                        <p>Lorem ipsum, dolor sit</p>
                                                        <h5>Rs. {v.price}</h5>
                                                        <small
                                                            class="text-white bg-success px-2 py-1 d-inline-block rounded-3 mt-2"
                                                        >In Stock</small
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <button className='py-2 px-3 me-2' onClick={() => quantityUpdate(v.id,'minus')}>-</button>
                                                        <button className='py-2 px-3'>{ v.quantity }</button>
                                                        <button className='py-2 px-3 ms-2' onClick={() => quantityUpdate(v.id,'plus')}>+</button>
                                                    </div>
                                                    <div><h5>Rs. {v.price } * { v.quantity }  = Rs. {v.price * v.quantity }</h5></div>
                                                    <div>
                                                        <button onClick={() => deleteCart(v.id)}
                                                            type="button"
                                                            class="btn-close"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            </>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                        {/* <!-- ./ single cart item end  -->
                        <!-- single cart item  --> */}
                        
                     
                        {/* <!-- ./ single cart item end  --> */}
                    </div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-4">
                        <div class="bg-light rounded-3 p-4 sticky-top">
                            <h6 class="mb-4">Order Summary</h6>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>Subtotal</div>
                                <div><strong>Rs. {totalValue}</strong></div>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between align-items-center">
                                <div>Delivery Charge</div>
                                <div><strong>Rs. 100</strong></div>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between align-items-center">
                                <div>Total</div>
                                <div><strong>Rs.{totalValue + 100}</strong></div>
                            </div>
                            <button class="btn btn-primary w-100 mt-4">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
