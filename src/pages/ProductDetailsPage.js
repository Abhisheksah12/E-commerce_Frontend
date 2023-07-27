import React from 'react';
import Navbar from '../features/navbar/Navbar';
import ProductDetail from '../features/product/components/ProductDetail';

const ProductDetailsPage = () => {
  return (
    <div>
        <Navbar>
            <ProductDetail></ProductDetail>
        </Navbar>
    </div>
  )
}

export default ProductDetailsPage;