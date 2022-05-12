import React from "react";
import {
  Container,
  Nav,
  NavbarBrand,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="shadow py-3">
        <Container>

          <Navbar.Brand as={Link} to="/"><h2>ClockWatch</h2></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto">

              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/product">Product</Nav.Link>
              <Nav.Link as={Link} to="/sale">Sale</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/lookbook">LookBook</Nav.Link>
              <Nav.Link as={Link} to="/blog">blog</Nav.Link>

            </Nav>

            <Nav>
            <Nav.Link as={Link} to="/lookbook">Login</Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
