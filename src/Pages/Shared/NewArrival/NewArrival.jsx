import React, { useEffect, useState } from "react";
import "./NewArrival.css";
import { Container, Row, Col } from "react-bootstrap";
import ShowProduct from "../ShowProduct/ShowProduct";
import useProducts from "../../Hooks/useProducts";

const NewArrival = () => {
  const [products, setProducts] = useProducts();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (pd) => {
    const exists = cart.find((item) => item.id === pd.id);
    if (!exists) {
        const newCart = [...cart, pd];
        setCart(newCart);
    } else {
      alert("Already Selected");
    }
  };
  return (
    <>
      <Container>
        <div className="section-title">
          <h2>New Arrival</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            delectus!
          </p>
        </div>
        <Row className="g-4">
          {products.map((pd) => (
            <ShowProduct key={pd} pd={pd} handleAddToCart={handleAddToCart} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default NewArrival;
