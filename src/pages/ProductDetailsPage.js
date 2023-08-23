import React from 'react';
import Navbar from '../features/navbar/Navbar';
import ProductDetail from '../features/product/components/ProductDetail';
import Footer from '../features/common/Footer';

const ProductDetailsPage = () => {
  return (
    <div>
        <Navbar>
            <ProductDetail></ProductDetail>
        </Navbar>
        <Footer></Footer>
    </div>
  )
}

export default ProductDetailsPage;