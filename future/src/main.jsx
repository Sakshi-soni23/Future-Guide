import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-tg7f5z1odf4ffpnv.us.auth0.com"
    clientId="F9vB5THejiD5fYWcbNBeylncgzW4u1n4"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
  <App />
    </Auth0Provider>
);
