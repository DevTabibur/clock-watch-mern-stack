import React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from "react-router-dom";

const ShowOffCanvas = ({ handleClose, show, pd }) => {
  const {
    name,
    category,
    ratings,
    price,
    description,
    image,
    pairImage,
    pairImage2,
    pairImage3,
    pairImag4,
    pairImage5,
  } = pd;
  return (
    <>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Price: {price}</p>
        </Offcanvas.Body>
        <Link to="/checkout">Checkout</Link>

      </Offcanvas>
    </>
  );
};

export default ShowOffCanvas;
