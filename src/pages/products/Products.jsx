import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../../redux/product/productSlice';
import { Container, Spinner, Alert, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleEdit = useCallback((id) => {
    alert(`Bu ${id} ürünü için düzenleme aktif edilmemiştir. `)
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch(deleteProduct(id));
  }, [dispatch]);

  const handleProductClick = useCallback((id) => {
    navigate(`/products/${id}`); // Ürün detay sayfasına yönlendir
  }, [navigate]);

  const renderTable = () => (
    <table className="table table-striped mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td 
              className='text-danger' 
              style={{ cursor: 'pointer' }}
              onClick={() => handleProductClick(product.id)}
            >
              {product.title}
            </td>
            <td>{product.description || 'No description'}</td>
            <td>{product.price}</td>
            <td>
              <Button variant="warning" onClick={() => handleEdit(product.id)} className="btn-sm w-100">
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDelete(product.id)} className="btn-sm w-100 mt-2">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderMobileView = () => (
    products.map((product) => (
      <Row key={product.id} className="mb-4 border-bottom py-3">
        <Col xs={12} className="mt-2 text-danger cursor-pointer" onClick={() => handleProductClick(product.id)}>
          <strong>Name:</strong> {product.title}
        </Col>
        <Col xs={12} className="mt-2">
          <strong>Description:</strong> {product.description || 'No description'}
        </Col>
        <Col xs={12} className="mt-2">
          <strong>Price:</strong> {product.price}
        </Col>
        <Col xs={12} className="d-flex justify-content-center mt-2">
          <Button variant="warning" onClick={() => handleEdit(product.id)} className="me-2">
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleDelete(product.id)}>
            Delete
          </Button>
        </Col>
      </Row>
    ))
  );

  let content;

  if (status === 'loading') {
    content = <Spinner animation="border" />;
  } else if (status === 'succeeded') {
    content = (
      <>
        <div className="d-none d-md-block">
          {renderTable()}
        </div>
        <div className="d-md-none">
          {renderMobileView()}
        </div>
      </>
    );
  } else if (status === 'failed') {
    content = <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container>
      <h2 className='text-center'>Products</h2>
      {content}
    </Container>
  );
}

export default Products;
