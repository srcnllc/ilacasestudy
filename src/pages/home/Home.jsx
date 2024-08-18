import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col className="text-center">
          <h1>İLA Case çalışmasına hoşgeldiniz.</h1>
          <p>Ürünleri görmek için aşağıdaki butona tıklayın:</p>
          <div className='d-flex gap-2 justify-content-center'>
          <Button variant="primary" onClick={() => navigate('/products')}>
            Products Sayfasına Git
          </Button>
          <Button variant="primary" onClick={() => navigate('/theoreticalTest')}>
            Theoretical Test 
          </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
