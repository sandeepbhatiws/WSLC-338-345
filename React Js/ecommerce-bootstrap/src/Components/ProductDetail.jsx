import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function ProductDetail() {

    var productId = useParams(); 
    var productId = productId.id;

    const [productDetails, setProductDetails] = useState('');
    const [currentImage, setCurrentImage] = useState('');
    

    useEffect(() => {
        axios.get(`https://wscubetech.co/ecommerce-api/productdetails.php?id=${productId}`)
        .then((success) => {
            setProductDetails(success.data.product)
            setCurrentImage(success.data.product.multiple_images[0])
        })
        .catch((error) => {
            
        })
    },[]);

    const imageHandler = (image) => {
        setCurrentImage(image)
    }

  return (
    <>

        { 
            (productDetails) 
                ?
                    <div class="container my-5">
                        <div class="row details-snippet1">
                            <div class="col-md-7">
                                <div class="row">
                                    <div class="col-md-2 mini-preview">
                                        {
                                            productDetails.multiple_images.map((v,i) => {
                                                return(
                                                    <img class="img-fluid" onMouseOver={ () => imageHandler(v) } src={v} alt="Preview"/>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                    <div class="col-md-10">
                                        <div class="product-image">
                                            <img class="img-fluid" src={currentImage} alt="Main Image"/>
                                        </div>
            
                                    </div>
                                </div>
            
                            </div>
                            <div class="col-md-5">
                                <div class="category"><span class="theme-text">Category :</span> {productDetails.category}</div>
                                <div class="title">{productDetails.name}</div>
                                <div class="ratings my-2">
                                    <div class="stars d-flex">
                                        <div class="theme-text mr-2">Product Ratings: </div>
                                        <div>&#9733;</div>
                                        <div>&#9733;</div>
                                        <div>&#9733;</div>
                                        <div>&#9733;</div>
                                        <div>&#9733;</div>
                                        <div class="ml-2">({productDetails.rating}) Rating</div>
                                    </div>
                                </div>
                                <div class="price my-2">${productDetails.price}
                                    {/* <strike class="original-price">$120.00</strike> */}
                                </div>
                                <div class="theme-text subtitle">Brief Description:</div>
                                <div class="brief-description">
                                    {productDetails.description}
                                </div>
            
                                <div>
                                    <div class="subtitle my-3 theme-text">Colors:</div>
                                    <div class="select-colors d-flex">
                                        <div class="color red"></div>
                                        <div class="color silver"></div>
                                        <div class="color black"></div>
                                    </div>
                                </div>
            
                                <hr/>
                                <div class="row">
                                    <div class="col-md-3">
                                        <input type="number" class="form-control" value="1"/>
                                    </div>
                                    <div class="col-md-9"><button class="btn addBtn btn-block">Add to basket</button></div>
                                </div>
            
                            </div>
                        </div>
                    </div>
                :
                ''
        }
        
    </>
  )
}
