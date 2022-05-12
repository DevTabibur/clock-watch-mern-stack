import React from 'react';
import './ShowProduct.css'
import {Col} from 'react-bootstrap'

const ShowProduct = ({pd}) => {

  return (
    <>
        <Col md={3} lg={3} sm={6}>
        <div className="product-box">
        <img src={pd.image} alt="product__img" />

        <div className="hover-img-div">
        <button>Add to Cart</button>
        <button>Quick Overview</button>
        </div>

        <div className="info">
        <h3 className='product-name'>{pd.name}</h3>
        <h3 className='product-price'>{pd.price}</h3>
        </div>

        </div>

        </Col>
    </>
  )
}

export default ShowProduct