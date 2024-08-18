import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

function SidebarComponent() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg="light" expand="lg" fixed="left" className="flex-column vh-100">
      <Container className="flex-column align-items-start">
        <Navbar.Brand href="/" className="mb-4">İLA Case Study</Navbar.Brand>
        <Nav className="flex-column w-100">
        <Nav.Link href="/" className="mb-2">Home</Nav.Link>
        <Nav.Link href="/registrationForm" className="mb-2">Registration Form</Nav.Link>
          <Nav.Link href="/products" className="mb-2">Products</Nav.Link>
        </Nav>
        <div className="mt-auto">
          {isAuthenticated ? (
            <Button 
              onClick={() => logout({ returnTo: window.location.origin })} 
              className="w-100"
            >
              Logout
            </Button>
          ) : (
            <Button 
              onClick={() => loginWithRedirect()} 
              className="w-100"
            >
              Login
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default SidebarComponent;
