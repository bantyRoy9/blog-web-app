import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';

const App = () => (
  <BrowserRouter>
    <AppWithRouterAccess/>
  </BrowserRouter>
);
export default App;