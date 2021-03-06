import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const styles = {
  navbarStyle: {
    padding: "2rem",
    fontSize: "2rem",
    fontFamily: "SansSerif",
    backgroundColor: "#42a5f5"
  },
  appName: {
    fontSize: "5rem",
    marginRight: "8rem",
    fontFamily: "Impact",
  },
};

function MyNavbar() {
  return (
    <Container fluid style={styles.navbarStyle} className="MainNav">
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Brand style={styles.appName} className="AppName">
          A c t i v y N i z e r
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-light">
          <Nav className="mr-auto">
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
