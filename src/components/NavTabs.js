import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../App.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
    <Navbar
      style={{
        backgroundColor: "black",
        // margin: "0em 0em 0em",
        // padding: "0em 0em",
      }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          style={{ color: "white" }}
          href="#Home"
          onClick={() => handlePageChange("Home")}
        >
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{ color: "white" }}
              href="#About-Me"
              onClick={() => handlePageChange("About-Me")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href="#My-Projects"
              onClick={() => handlePageChange("My-Projects")}
            >
              My Projects
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              href="#Contact-Me"
              onClick={() => handlePageChange("Contact-Me")}
            >
              Contact Me
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              target="_blank"
              href="./assets/files/May2021-Resume.pdf"
              onClick={() => handlePageChange("Resume")}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavTabs;
