import React from 'react';
import {useParams} from 'react-router-dom';

const ProductPage = (props) => {
    const {id} = useParams();
    return (
        <div>
           <h1>상품페이지</h1>
           <h2>{id}상품상세페이지</h2>
        </div>
    );
};

export default ProductPage;