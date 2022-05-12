import React, { useEffect, useState } from 'react';
import './NewArrival.css'
import {Container, Row, Col} from 'react-bootstrap'
import ShowProduct from '../ShowProduct/ShowProduct';

const NewArrival = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products_db.json")
        .then(res => res.json())
        .then(data => {
            // console.log('data', data)
            setProducts(data)
        })
    }, [])
  return (
    <>
        <Container>
            <div className="section-title">
                <h2>New Arrival</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, delectus!</p>
            </div>
            <Row>
                {
                    products.map( (pd) => <ShowProduct
                        key={pd}
                        pd={pd}
                    />)
                }
            </Row>
        </Container>
    </>
  )
}

export default NewArrival;