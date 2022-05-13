import React, { useState } from "react";
import "./Navbar.css";
import {
  Container,
  Nav,
  NavbarBrand,
  NavDropdown,
  Navbar,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch, BsHeart, BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const HeaderNav = () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState([]);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="shadow py-3 header-nav">
        <Container fluid className="px-3 ">
          <Navbar.Brand as={Link} to="/" className="menu-link">
            <h2>Clock-Watch</h2>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/shop" className="menu-link">
                Shop <sup className="shop-sup">New</sup>
              </Nav.Link>
              <Nav.Link as={Link} to="/product" className="menu-link">
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/sale" className="menu-link-sale">
                Sale <sup className="sale-sup">Hot</sup>
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio" className="menu-link">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/lookbook" className="menu-link">
                LookBook
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="menu-link">
                blog
              </Nav.Link>
            </Nav>

            <Nav>
            <button onClick={() => setShow(true)} className="menu-btn">
                <BsSearch className="icon" />
              </button>
               {/* search modal */}
              <Modal
                show={show}
                onHide={() => setShow(false)}
                size="xl"
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Custom Modal Styling
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Ipsum molestiae natus adipisci modi eligendi? Debitis amet
                    quae unde commodi aspernatur enim, consectetur. Cumque
                    deleniti temporibus ipsam atque a dolores quisquam quisquam
                    adipisci possimus laboriosam. Quibusdam facilis doloribus
                    debitis! Sit quasi quod accusamus eos quod. Ab quos
                    consequuntur eaque quo rem! Mollitia reiciendis porro quo
                    magni incidunt dolore amet atque facilis ipsum deleniti rem!
                  </p>
                </Modal.Body>
              </Modal>
              <button className="menu-btn">
                  <CgProfile className="icon" />
                </button>
                <button className="menu-btn">
                  <BsHeart className="icon" />
                  <sup>0</sup>
                </button>
                <button className="menu-btn">
                  <BsCart className="icon" />
                  <sup>{size ? size : '0'}</sup>
                </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
