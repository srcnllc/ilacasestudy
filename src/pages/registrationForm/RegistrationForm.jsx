import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Şu an backend'e bağlı olmadığından veriyi sadece console'a yazıyoruz
    console.log('Kayıt Formu Verileri:', formData);
  };

  return (
    <Container className="mt-5">
      <h2>Registration Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your first name" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formLastName" className="mt-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your last name" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mt-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            type="tel" 
            placeholder="Enter your phone number" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Form.Group controlId="formAddress" className="mt-3">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
