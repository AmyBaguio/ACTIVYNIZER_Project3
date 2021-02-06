import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const styles = {
  navbarStyle: {
    background: "blue",
    padding: "2rem",
    fontFamily: "Impact",
    fontSize: "1rem",
    margin: "0",
    
  },
  appName: {
    fontSize: "3rem",
    color: "white",
  },
  sub: {
    fontSize: "1.5rem",
    color: "#f8f9fa",
  }
};

function MyNavbar() {
  return (
    <Container fluid style={styles.navbarStyle} className="MainNav">
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Brand style={styles.appName} className="AppName">
          A c t i v y N i z e r
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  style={styles.sub} className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default MyNavbar;
