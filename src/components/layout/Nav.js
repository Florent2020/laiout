import React from "react";
// import { Navbar, Nav, NavLink } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

function Header() {
  return (
    <div id="header">
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="/">
            <img
              src={
                "https://content.app-sources.com/s/5908297055308249/uploads/Images/Asset_1-0910835.png"
              }
              alt="laiout"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/#team">Team</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
