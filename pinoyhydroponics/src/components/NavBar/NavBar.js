import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  Nav, 
  Navbar, 
  NavDropdown, 
  Form, 
  FormControl, 
  Button} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg" >
      <Navbar.Brand  className="brand" href="#home">Pinoy Hydroponics</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="OUR STORY" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">ABOUT US </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">OUR VALUES</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">OUR TEAM</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">OUR BOARD</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">OUR FARMS</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">ENVIROMENTAL IMPACT</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">AWARDS</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">TECHNOLOGY</Nav.Link>
          <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">HOME DIY </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">FOODS </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">PARTHNERS</Nav.Link>
          <Nav.Link href="#home">BLOG</Nav.Link>
          <Nav.Link href="#home">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;