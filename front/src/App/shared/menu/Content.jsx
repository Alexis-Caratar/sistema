import React, { useState } from 'react';
import { FiDollarSign, FiBox, FiUsers, FiShoppingCart } from 'react-icons/fi';
import CardClient from './cards/CardClient';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Asegúrate de que los íconos del marcador se vean correctamente
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Content = () => {
  const [date, setDate] = useState(new Date());
  const position = [51.505, -0.09]; // Cambia a la ubicación deseada

  return (
    <main className="container-fluid flex-fill"> <br></br><br></br>
      <h2 className="mb-4 h4">SISTEMA DE INFORMACIÓN PARA ECOMMERCE TIENDA</h2>
      <div className="mt-5">
        <p>Bienvenido al sistema de gestión de tu tienda en línea. Aquí podrás administrar todos los aspectos de tu ecommerce de manera sencilla.</p>
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="row mt-5">
        <div className="col-md-3 mb-4">
          <div className="card text-white bg-primary shadow-sm animate__animated animate__fadeIn">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <FiDollarSign size={40} />
                <div className="ms-3">
                  <h5 className="card-title">Total de Ventas</h5>
                  <p className="card-text">$1,200.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card text-white bg-success shadow-sm animate__animated animate__fadeIn">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <FiBox size={40} />
                <div className="ms-3">
                  <h5 className="card-title">Productos Disponibles</h5>
                  <p className="card-text">150</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card text-white bg-warning shadow-sm animate__animated animate__fadeIn">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <FiUsers size={40} />
                <div className="ms-3">
                  <h5 className="card-title">Usuarios Registrados</h5>
                  <p className="card-text">1,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card text-white bg-danger shadow-sm animate__animated animate__fadeIn">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <FiShoppingCart size={40} />
                <div className="ms-3">
                  <h5 className="card-title">Órdenes Pendientes</h5>
                  <p className="card-text">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-3 mb-4">
          <CardClient />
        </div>
        <div className="col-md-3 mb-4">
          <CardClient />
        </div>
        <div className="col-md-3 mb-4">
          <CardClient />
        </div>
        <div className="col-md-3 mb-4">
          <CardClient />
        </div>
      </div>

      {/* Fila para el calendario y el mapa */}
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Calendario</h5>
              <Calendar onChange={setDate} value={date} />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mapa</h5>
              <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    Un marcador en esta ubicación.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
