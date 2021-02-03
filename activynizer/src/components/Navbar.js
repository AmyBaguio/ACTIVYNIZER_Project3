import React from "react";
import { Container, Navbar, Nav} from 'react-bootstrap';

const styles = {
  navbarStyle: {
    background: "green",
    justifyContent: "flex-end"
  }
};
function MyNavbar() {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">ActivyNizer</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/calendar">Calendar</Nav.Link>
      </Nav>
    
  </Navbar>
    );
  }
  
  export default MyNavbar;