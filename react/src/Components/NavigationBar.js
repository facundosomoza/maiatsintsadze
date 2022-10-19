import React, { useEffect } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

export default function NavigationBar({ emailData, joinIn, logOutButton }) {
  const history = useHistory();

  const handleButtonLogOut = () => {
    logOutButton(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">Maia Tsintsadze</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav-link" to="/contactform">
              Contact
            </Link>
            {joinIn ? (
              <>
                <Nav.Link disabled>Hello {emailData}</Nav.Link>
                <Button onClick={handleButtonLogOut}>Log out</Button>
              </>
            ) : (
              <Link className="nav-link" to="/formaccount">
                Your Account
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
