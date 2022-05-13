import React, { useState } from "react";
import "./ShowProduct.css";
import { Col } from "react-bootstrap";
import ShowModal from "../Modal & Offcanvas/ShowModal";
import ShowOffCanvas from "../Modal & Offcanvas/ShowOffCanvas";

const ShowProduct = ({ pd, handleAddToCart }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col md={3} lg={3} sm={6}>
        <div className="product-box">
          <img src={pd.image} alt="product__img" />

          <div className="hover-img-div">
            {/* <button onClick={()=> handleAddToCart(pd.id)} onClick={handleShow}>Add to Cart</button> */}
            <button onClick={()=> handleAddToCart(pd)}>Add to Cart</button>
            <ShowOffCanvas show={show} handleClose={handleClose} key={pd.id} pd={pd}/>
            <button onClick={() => setModalShow(true)}>Quick Overview</button>
            <ShowModal key={pd.id} pd={pd} show={modalShow} onHide={() => setModalShow(false)} />
          </div>

          <div className="info">
            <h3 className="product-name">{pd.name}</h3>
            <h3 className="product-price">{pd.price}</h3>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ShowProduct;
