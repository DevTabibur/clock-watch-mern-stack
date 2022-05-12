import React from 'react';
import './ShowProduct.css'
import {Col} from 'react-bootstrap'

const ShowProduct = ({pd}) => {

  return (
    <>
        <Col md={3} lg={3} sm={6}>
        <div className="product-box">
        <img src={pd.image} alt="product__img" />

        </div>

        </Col>
    </>
  )
}

export default ShowProduct