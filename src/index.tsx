import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { offers } from './mock/offers.ts';
import { AuthorizationStatus } from './const.ts';

const authorizationStatus = AuthorizationStatus.NoAuth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers = {offers} authorizationStatus = {authorizationStatus}/>
  </React.StrictMode>
);
