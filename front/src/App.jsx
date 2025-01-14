import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './App/shared/menu/Dasboard'; // Ajusta la ruta según tu estructura de carpetas
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './App/pages/full-layout/home/Menu_banner'; // Home
import Login from './App/pages/content-layout/login/Login'; // Importa tu componente de inicio de sesión


function App() {
  return (
      <Router>
          <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </Router>
  );
}

export default App;