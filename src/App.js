import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import ProductDetail from './pages/productDetail/ProductDetail';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import SidebarComponent from './components/sidebarComponent/SidebarComponent';
import { Container, Row, Col } from 'react-bootstrap';
import RegistrationForm from './pages/registrationForm/RegistrationForm';
import TheoreticalTest from './pages/theoreticalTest/TheoreticalTest';
import MobileNavbar from './components/mobileNavbar/MobileNavbar';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Container fluid>
        <Row>
          {isAuthenticated && (
            <>
              <Col className="d-lg-none px-0">
                <MobileNavbar />
              </Col>
              <Col xs={3} md={2} className="p-0 d-none d-lg-block">
                <SidebarComponent />
              </Col>
            </>
          )}
          <Col xs={isAuthenticated ? 12 : 12} md={isAuthenticated ? 10 : 12} >
            <Routes>
              <Route 
                path="/" 
                element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/login" 
                element={isAuthenticated ? <Navigate to="/" /> : <Login />} 
              />
              <Route 
                path="/registrationForm" 
                element={
                  <ProtectedRoute>
                    <RegistrationForm />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/theoreticalTest" 
                element={
                  <ProtectedRoute>
                    <TheoreticalTest/>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/products" 
                element={
                  <ProtectedRoute>
                    <Products />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/products/:id" 
                element={
                  <ProtectedRoute>
                    <ProductDetail />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
