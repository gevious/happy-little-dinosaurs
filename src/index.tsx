import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MockedProvider } from '@apollo/client/testing';
import { mocks } from './query.mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MockedProvider mocks={mocks} addTypename={false}>
	<App />
    </MockedProvider>
  </React.StrictMode>
);
