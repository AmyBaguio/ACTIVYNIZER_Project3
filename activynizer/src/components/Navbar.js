import React from "react";
import "../styles/Navbar.css";
import { Navbar, Nav, Container,} from 'react-bootstrap';

const styles = {
  navbarStyle: {
    background: "blue",
    padding: "2rem",
    fontFamily: "Impact",
    fontSize: "1rem",
    
  }
};
function MyNavbar() {
    return (
  <Container fluid style={styles.navbarStyle} className="MainNav">    
  <Navbar collapseOnSelect expand="lg"> 
  <Navbar.Brand href="/dashboard">A c t i v y N i z e r</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/calendar">Calendar</Nav.Link>
      </Nav>
    <Nav> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container> 
    );
  }
  
  export default MyNavbar;