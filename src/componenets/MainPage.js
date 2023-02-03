import './MainPage.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';

const MainPage = () => {
    let [ producsts, setProducts] = useState([])
    useEffect(()=>{
    axios.get("https://8ba575b1-7cc3-4b1e-820c-3ed99ac85ea2.mock.pstmn.io/products")
    .then((result)=>{
        producsts=result.data.producsts;
        setProducts(producsts)
    })
    .catch((error)=>{
        console.log(`error:${error}`)
    })
    },[]);
    return (
        <div>
             <div id="header-area">
                <div id="header">
                    <img src="images/icons/logo.png" alt="logo" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt="main" />
                </div>
                <h1>Producsts</h1>
                <div id="producst-list">
                    {producsts.map((product,idx)=>{
                        return(
                           <div className='producst-acrd' key={idx}>
                            <div>
                                <img src='{product.imageUrl}' alt='{product.name}' className='producst-img' />
                            </div>
                            <div className='producst-contents'>
                                <span className='product-name'>{product.name}</span>
                                <span className='product-price'>{product.price}</span>
                                <span className='product-seller'>
                                    <img src='./images/icons/avatar.png'/>
                                    <spna>{product.seller}</spna>
                                </span>
                            </div>
                           </div>
                        )
                    })}
                </div>
            </div>
            <div id="footer">
            <a href="#">회사소개</a>
            <a href="#">이용약관</a>
            <a href="#">통신판매업 : 123-4567</a>
            <a href="#">사업자등록번호 : 123-4567-124</a>
            </div>
        </div>
    );
};

export default MainPage;