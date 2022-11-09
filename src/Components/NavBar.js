import React from "react";
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/books">Books</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Members</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Borrows</Nav.Link>
        </Nav.Item>        
      </Nav>
    </div>
  );
}

export default NavBar;
