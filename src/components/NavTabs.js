import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../App.css";
import "./styles/NavBar.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
      <Navbar
        justify
        variant="tabs"
        variant='dark'
        style={{
          backgroundColor: "black",
          margin: "0em 0em 0em",
          padding: "0em 0em",
        }}
        position='static'
        fixed="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            style={{ color: "white" }}
            href="#Home"
            onClick={() => handlePageChange("Home")}
          >
            <img
              className="ui fluid image logo"
              src='./assets/images/alexlogo.png'
              alt="Alex Gonzalez"
            />
          </Navbar.Brand>
          <Navbar.Toggle style={{color: "white"}} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{borderColor: "white"}}
                className="navsegment"
                href="#About-Me"
                onClick={() => handlePageChange("About Me")}
              >
                About Me{" "}
              </Nav.Link>
              <Nav.Link
                className="navsegment"
                href="#My-Projects"
                onClick={() => handlePageChange("My Projects")}
              >
                My Projects
              </Nav.Link>
              <Nav.Link
                style={{ color: "white" }}
                target="_blank"
                href="./assets/files/AlexisGonzalezJan2022Resume.docx"
                onClick={() => handlePageChange("Resume")}
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavTabs;
