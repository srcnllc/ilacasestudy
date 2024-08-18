import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from './redux/store'; 
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <Provider store={store}> 
      <App />
    </Provider>
  </Auth0Provider>
);
