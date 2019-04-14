import React, { Component } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">ezCTF</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          
          <Nav activeKey="/"> 
            <Nav.Item>
              <Nav.Link eventKey={1} as={Link} href="/" to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={1} as={Link} href="/challenge" to="/challenge">Challenge</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={1} as={Link} href="/challenges" to="/challenges">Challenges</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={1} as={Link} href="/login" to="/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
