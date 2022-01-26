import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Typography from "@mui/material/Typography";

import "../App.css";
import "./styles/NavBar.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar
      justify
      variant="tabs"
      variant="dark"
      style={{
        backgroundColor: "black",
        margin: "0em 0em 0em",
        padding: "0em 0em",
        justifyContent: "space-evenly",
        color: "white",
        borderBottom: '1px #77B9F2 dashed'
      }}
      position="static"
      fixed="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          style={{ color: "white", padding: "0", marginRight: "5em" }}
          href="#Home"
          onClick={() => handlePageChange("Home")}
        >
          <img
            className="ui fluid image logo"
            src="./assets/images/alexlogo3.png"
            alt="Alex Gonzalez"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ color: "white" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="nav-tab">
              <Nav.Link
                className="navsegment"
                href="#About-Me"
                onClick={() => handlePageChange("About Me")}
              >
                      <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      style={{
                        textAlign: "center",
                        fontFamily: "Monospace, sans-serif",
                        color: "white",
                        letterSpacing: '10',
                        fontWeight: 'bold'
                      }}
                    >
                     ABOUT ME
                    </Typography>
              </Nav.Link>
            </div>
            <div className="nav-tab">
              <Nav.Link
                className="navsegment"
                href="#My-Projects"
                onClick={() => handlePageChange("My Projects")}
              >
<Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      style={{
                        textAlign: "center",
                        fontFamily: "Monospace, sans-serif",
                        color: "white",
                        letterSpacing: '10',
                        fontWeight: 'bold'
                      }}
                    >
                     MY PROJECTS
                    </Typography>              </Nav.Link>
            </div>
            <div className="nav-tab">
              <Nav.Link
                target="_blank"
                href="./assets/files/AlexisGonzalezJan2022Resume.docx"
                onClick={() => handlePageChange("Resume")}
              >
<Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      style={{
                        textAlign: "center",
                        fontFamily: "Monospace, sans-serif",
                        color: "white",
                        letterSpacing: '10',
                        fontWeight: 'bold'
                      }}
                    >
                     RESUME
                    </Typography>              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
