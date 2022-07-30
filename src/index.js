import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
      <Route path="/home" element={<Home />}>
      </Route>
      <Route path="/about" element={<About />}>
      </Route>
    </Routes>
  </BrowserRouter>
);
