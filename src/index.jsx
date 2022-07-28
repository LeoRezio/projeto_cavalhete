import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Temperature from './pages/Temperature';
import Massa from './pages/Massa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='temperature' element={<Temperature/>} />
          <Route path='massa' element={<Massa/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
