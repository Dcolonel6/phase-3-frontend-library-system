import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const user = sessionStorage.getItem("user");
  const logout = () => {
    sessionStorage.removeItem("user");
    window.location.href = "/";
  }

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="/books">E-LiBRARY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/books">Books</Nav.Link>
            {user?.is_librarian &&<NavDropdown title="Manage" id="basic-nav-dropdown">
              <NavDropdown.Item bg="dark"  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Repair
              </NavDropdown.Item> 
            </NavDropdown>}
           {!user&& <Nav.Link href="/login">Login</Nav.Link>}
           {user&& <Nav.Link href="#" onClick={logout}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
