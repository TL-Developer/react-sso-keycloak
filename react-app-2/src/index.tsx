import ReactDOM from 'react-dom/client';
import App from './App';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080',
  realm: 'Portal SSO',
  clientId: 'react-app-2',
  clientSecret: process.env.REACT_APP_CLIENT_SECRET
};

const initOptions = { onLoad: 'login-required' };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={new Keycloak(keycloakConfig)} initOptions={initOptions}>
    <App />
  </ReactKeycloakProvider>
);

