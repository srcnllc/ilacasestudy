import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginWithRedirect({
        redirectUri: window.location.origin,
        login_hint: email,
        password,
      });
    } catch (err) {
      setError('Giriş başarısız oldu. Lütfen bilgilerinizi kontrol edin veya kayıt olun.');
    }
  };

  const handleSignUp = () => {
    loginWithRedirect({
      screen_hint: 'signup',
      redirectUri: window.location.origin,
    });
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>

      <div className="mt-3">
        <p>Hesabınız yoksa <Button variant="link" onClick={handleSignUp}>üye olun</Button></p>
      </div>
    </Container>
  );
}

export default Login;
