import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CompanyLogo from "../../../assets/images/company-logo.jpg";
import Modal from "react-bootstrap/Modal";
import { BsHeart } from "react-icons/bs";

const ShowModal = (props) => {
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
  } = props.pd;
  return (
    <>
      <Modal
        {...props}
        dialogClassName="modal-90w"
        size="xl"
        centered
        animation
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={6} lg={6} sm={12}>
                <div className="product-box">
                  <img src={image} alt="product__img" />
                </div>
              </Col>

              <Col md={6} lg={6} sm={12}>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <p>{description}</p>

                <div className="button-box">
                  <input type="number" />
                  <button className="btn btn-success">Add to Cart</button>
                  <BsHeart />
                </div>
                <img src={CompanyLogo} alt="company__logo" />
                <div>Delivery & return</div>
                <div>Ask a question</div>
                <h5>Categories: {category}</h5>
                <a href="#">View Full Details</a>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShowModal;
