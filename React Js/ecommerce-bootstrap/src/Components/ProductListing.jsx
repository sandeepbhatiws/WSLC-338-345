import React, { useEffect, useState } from 'react'
import Header from './Header'
import ProductCard from './ProductCard'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductListing() {

    const [products, setProducts] = useState([]);

    const params = useParams();

    const [categorySlug, setCategorySlug] = useState([]);
    const [priceTo, setPriceTo] = useState('');
    const [filterSorting, setFilterSorting] = useState('');

    useEffect(() => {
        if (params.slug) {
            setCategorySlug([params.slug]);
        } else {
            setCategorySlug([]);
        }
    }, [params.slug]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                limit: 30,
                price_from: 0,
                price_to: priceTo,
                sorting : filterSorting,
                categories: categorySlug.toString()
            }
        })
            .then((result) => {
                setProducts(result.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categorySlug, priceTo, filterSorting])

    const [categories, SetCategories] = useState([]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((result) => {
                SetCategories(result.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const filterCategories = (slug) => {
        if (categorySlug.includes(slug)) {
            var final = categorySlug.filter((v, i) => {
                if (slug != v) {
                    return v;
                }
            })
            setCategorySlug([...final]);
        } else {
            categorySlug.push(slug);
            setCategorySlug([...categorySlug]);
        }

    }

    const filterPrice = (price) => {
        setPriceTo(price.target.value);
    }

    const sorting = (value) => {
        setFilterSorting(value);
    }

    return (
        <>
            <div class="container bg-white">
                <div class="search-section">
                    <div class="container-fluid container-xl">
                        <div class="row main-content ml-md-0">
                            <div class="sidebar col-md-3 px-0">

                                <div class="sidebar__inner">
                                    <div class="filter-body">
                                        <div>
                                            <h2 class="border-bottom filter-title pb-2">Categories</h2>
                                            <div class="mb-30 filter-options">
                                                {
                                                    categories.map((v, i) => {
                                                        return (
                                                            <div class="custom-control custom-checkbox mb-3">
                                                                <input type="checkbox" class="custom-control-input" id={`category_${v.id}`} onClick={() => filterCategories(v.slug)} checked={categorySlug.includes(v.slug) ? 'checked' : ''} />
                                                                <label class="custom-control-label  ps-2" for={`category_${v.id}`}>{v.name}</label>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                            {/* <!--seating option end--> */}


                                            {/* <!-- cusine filters end --> */}
                                            <h2 class="font-xbold body-font border-bottom filter-title pb-2">Price Range</h2>
                                            <div class="mb-3 theme-clr xs2-font d-flex justify-content-between">
                                                <span id="slider-range-value1">$0</span>
                                                <span id="slider-range-value2">${priceTo ? priceTo : 2000}</span>
                                            </div>
                                            <div class="mb-30 filter-options">
                                                <div>
                                                    <div id="slider-range">
                                                        <div class="form-group">
                                                            <input type="range" onChange={filterPrice} min="0" max="20000" class="form-control-range" id="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="content col-md-9">
                                <div class="d-flex justify-content-between border-bottom align-items-center">
                                    <h2 class="title">All Products</h2>
                                    <div class="filters-actions">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-secondary dropdown-toggle bg-white text-black" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li onClick={ () => sorting(1) }>
                                                <a class="dropdown-item">Name ASC</a>
                                            </li>
                                            <li onClick={ () => sorting(2) }>
                                                <a class="dropdown-item">Name DESC</a>
                                            </li>
                                            <li onClick={ () => sorting(3) }>
                                                <a class="dropdown-item">Price ASC</a>
                                            </li>
                                            <li onClick={ () => sorting(4) }>
                                                <a class="dropdown-item">Price DESC</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>



                                <div class="row row-grid col">

                                    {
                                        products.map((data, index) => {
                                            return (
                                                <ProductCard column="4" productData={data} key={index} />
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
