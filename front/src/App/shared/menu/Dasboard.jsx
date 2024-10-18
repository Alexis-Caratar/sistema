import React from 'react';
import 'react-calendar/dist/Calendar.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Navbar from './Navbar'; // Importa el Navbar
import Sidebar from './Sliderbar'; // Importa el Sidebar
import Footer from './Footer'; // Importa el Footer
import Content from './Content'; // Importa el Content

// Asegúrate de que los íconos del marcador se vean correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Dashboard = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar /> {/* Agrega el Navbar */}
      <div className="d-flex flex-row flex-grow-10">
        <Sidebar /> {/* Agrega el Sidebar */}
        <Content /> {/* Agrega el Content */}
      </div>
      <Footer /> {/* Agrega el Footer */}
    </div>
  );
};

export default Dashboard;
