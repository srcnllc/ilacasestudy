import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../redux/product/productSlice';
import { Container, Spinner, Alert, Card, Button, Row, Col } from 'react-bootstrap';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.selectedProduct);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col xs={6}>
        </Col>
        <Col xs={6} className="text-end">
          <Button variant="secondary" onClick={() => navigate(-1)}>Geri</Button>
        </Col>
      </Row>
      {status === 'loading' && <Spinner animation="border" className="mt-3" />}
      {status === 'failed' && <Alert variant="danger" className="mt-3">{error}</Alert>}
      {status === 'succeeded' && product && (
        <Row className="mt-4 align-items-center">
          <Col md={4} className="text-center">
            <Card.Img 
              variant="top" 
              src={product.image} 
              alt={product.title} 
              style={{ width: '100%', maxWidth: '300px', height: 'auto' }} 
            />
          </Col>
          <Col md={8}>
            <Card className="border-0">
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <strong>Category:</strong> {product.category}
                </Card.Text>
                <Card.Text>
                  <strong>Description:</strong> {product.description || 'No description'}
                </Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Card.Text>
                  <strong>Rating:</strong> {product.rating?.rate} ({product.rating?.count} reviews)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {status === 'succeeded' && !product && (
        <Alert variant="warning" className="mt-3">Product not found.</Alert>
      )}
    </Container>
  );
}

export default ProductDetail;
