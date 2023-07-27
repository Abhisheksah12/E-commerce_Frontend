import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductDetail from '../features/product-list/components/ProductDetail'

const ProductDetailsPage = () => {
  return (
    <div>
        <Navbar>
            <ProductDetail></ProductDetail>
        </Navbar>
    </div>
  )
}

export default ProductDetailsPage