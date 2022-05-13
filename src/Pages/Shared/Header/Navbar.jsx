import React from "react";
import './Navbar.css';
import {
  Container,
  Nav,
  NavbarBrand,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {BsSearch, BsHeart, BsCart} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg'


const HeaderNav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="shadow py-3 header-nav">
        <Container fluid className="px-3 ">

          <Navbar.Brand as={Link} to="/" className="menu-link"><h2>Clock-Watch</h2></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto">

              <Nav.Link as={Link} to="/shop" className="menu-link">Shop <sup className="shop-sup">New</sup></Nav.Link>
              <Nav.Link as={Link} to="/product" className="menu-link">Product</Nav.Link>
              <Nav.Link as={Link} to="/sale" className="menu-link-sale">Sale <sup className="sale-sup">Hot</sup></Nav.Link>
              <Nav.Link as={Link} to="/portfolio" className="menu-link">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/lookbook" className="menu-link">LookBook</Nav.Link>
              <Nav.Link as={Link} to="/blog" className="menu-link">blog</Nav.Link>

            </Nav>

            <Nav>
            <Nav.Link className="menu-right-icon"><button className="menu-btn"><BsSearch className="icon"/></button></Nav.Link>
            <Nav.Link className="menu-right-icon"><button className="menu-btn"><CgProfile className="icon"/></button></Nav.Link>
            <Nav.Link className="menu-right-icon"><button className="menu-btn"><BsHeart className="icon"/><sup>0</sup></button></Nav.Link>
            <Nav.Link className="menu-right-icon"><button className="menu-btn"><BsCart className="icon"/><sup>0</sup></button></Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
