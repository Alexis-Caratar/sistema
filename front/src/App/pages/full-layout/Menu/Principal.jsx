import { Route, Routes } from 'react-router-dom';
import Welcome from '../home/Welcome/Welcome';
import Categories from '../Categories/Categories'; 
import Nosotros from '../Nosostros/Nosotros';
import Login from '../../content-layout/login/Login';
import Navbar from './navbar/Navbar';
import Footer from './Footer/Footer';

function Principal() {
  return (
    <div>
      {/* Componente de bienvenida */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<div>{}</div>} />
        <Route path="/Nosotros" element={<div><Nosotros/></div>} />
        <Route path="/login" element={<div><Login/></div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Principal;
