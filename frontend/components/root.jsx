import App from './App.jsx';
import React from 'react';
import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';

export const Root = ({store}) => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
