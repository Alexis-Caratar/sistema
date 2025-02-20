import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Principal from './App/pages/full-layout/Menu/principal'; // Importa el componente Principal

function App() {
  return (
      <Router>
          <Routes>
            <Route path="*" element={<Principal />} /> {/* Añadimos "*" para manejar subrutas dentro de Principal */}
          </Routes>
      </Router>
  );
}

export default App;
