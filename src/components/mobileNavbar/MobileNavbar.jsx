import React, { useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function MobileNavbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar bg="light" expand="lg" className="d-lg-none justify-content-between">
      <Navbar.Brand as={Link} to="/">İLA Case Study</Navbar.Brand>
      <Button variant="outline-primary" onClick={toggleNavbar} aria-controls="basic-navbar-nav">
        <FaBars />
      </Button>
      {isOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-light z-index-1000">
          <div className="d-flex flex-column h-100">
            <Button 
              variant="outline-primary" 
              className="align-self-end mt-3 me-3" 
              onClick={toggleNavbar}
            >
              <FaTimes />
            </Button>
            <Nav className="flex-column text-center mt-5">
              <Nav.Link as={Link} to="/" onClick={toggleNavbar}>Home</Nav.Link>
              <Nav.Link as={Link} to="/registrationForm" onClick={toggleNavbar}>Registration Form</Nav.Link>
              <Nav.Link as={Link} to="/products" onClick={toggleNavbar}>Products</Nav.Link>
              {isAuthenticated ? (
                <Button 
                  onClick={() => { logout({ returnTo: window.location.origin }); toggleNavbar(); }}
                  className="mt-3"
                >
                  Logout
                </Button>
              ) : (
                <Button 
                  onClick={() => { loginWithRedirect(); toggleNavbar(); }} 
                  className="mt-3"
                >
                  Login
                </Button>
              )}
            </Nav>
          </div>
        </div>
      )}
    </Navbar>
  );
}

export default MobileNavbar;
