import React from 'react';
import { FiBell, FiMessageCircle, FiUser, FiSettings, FiHelpCircle, FiBarChart, FiInfo, FiLogOut } from 'react-icons/fi';
import logo from '../../../assets/img/logos_principal/logo_principal.png';
import avatar from '../../../assets/img/avatars/avatar.jpg';
import './../../../assets/css/Menu/Navbar.css';

function Navbar({ isClosed }) {
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [showMessages, setShowMessages] = React.useState(false);

    const toggleNotifications = () => setShowNotifications(!showNotifications);
    const toggleMessages = () => setShowMessages(!showMessages);

    return (
        
        <nav className="navbar navbar-expand-lg container-fluid navbar-dark">
            
            <div className="container-fluid">
                <a className="texto-color navbar-brand" href="https://google.com">
                    <img
                        src={logo}
                        alt="Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-text-top"
                    />
                    {'Sistema Ecommerce'}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link texto-color" onClick={toggleNotifications}>
                                <FiBell /> Notificaciones <span className="badge bg-danger">2</span>
                            </a>
                            {showNotifications && (
                                  <div className="notification-popup1">
                                  <h6 className='text-success'>2 Notificaciones</h6>
                                 
                                  <div className="notification-item">
                                  <FiSettings /> 
                                      <div className="message-content" >
                                          <strong>Update completed</strong>
                                          <p>Actualizacion pendiente</p>
                                          <span>12 dic</span>
                                      </div>
                                  </div>
                                  <div className="notification-item">
                                  <FiInfo />
                                      <div className="message-content">
                                          <strong>Security</strong>
                                          <p>Login from 192.186.1.8</p>
                                          <span>10m sep</span>
                                      </div>
                                  </div>
                                  {/* Puedes agregar más mensajes aquí */}
                              </div>
                            )}
                        </li>
                       
                        <li className="nav-item">
                                <a className="nav-link texto-color" onClick={toggleMessages}>
                                    <FiMessageCircle /> Mensajes <span className="badge bg-danger">4</span>
                                </a>
                                {showMessages && (
                                    <div className="notification-popup1">
                                        <h6 className='text-success'>4 New Messages</h6>
                                       
                                        <div className="notification-item">
                                            <img src={avatar} alt="Juan" className="profile-pic" />
                                            <div className="message-content">
                                                <strong>Juan Garcia</strong>
                                                <p>Hola, ¿cómo estás un gusto saludarte</p>
                                                <span>13 dic</span>
                                            </div>
                                        </div>
                                        <div className="notification-item">
                                            <img src={avatar} alt="Iris Samantha" className="profile-pic" />
                                            <div className="message-content">
                                                <strong>Iris Samantha</strong>
                                                <p>Encantado de ayudarte. tienes otra pregunta y con gusto te ayudare.</p>
                                                <span>10m sep</span>
                                            </div>
                                        </div>
                                         
                                        <div className="notification-item">
                                            <img src={avatar} alt="Juan" className="profile-pic" />
                                            <div className="message-content">
                                                <strong>Pepito Perez</strong>
                                                <p>Hola, ¿cómo estás un gusto saludarte</p>
                                                <span>13 dic</span>
                                            </div>
                                        </div>
                                        <div className="notification-item">
                                            <img src={avatar} alt="Iris Samantha" className="profile-pic" />
                                            <div className="message-content">
                                                <strong>Desarrollo</strong>
                                                <p>Encantado de ayudarte. tienes otra pregunta y con gusto te ayudare.</p>
                                                <span>10m sep</span>
                                            </div>
                                        </div>
                                        {/* Puedes agregar más mensajes aquí */}
                                    </div>
                                )}
                            </li>


                        
                          <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle texto-color" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FiUser /> Mi Cuenta
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://google.com"><FiUser /> Perfil</a></li>
                                    <li><a className="dropdown-item" href="https://google.com"><FiBarChart /> Analítica</a></li>
                                    <li><a className="dropdown-item" href="https://google.com"><FiHelpCircle /> Help Center</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://google.com"><FiSettings /> Configuración</a></li>
                                    <li><a className="dropdown-item" href="https://google.com"><FiInfo /> Acerca de</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://google.com"><FiLogOut /> Cerrar Sesión</a></li>
                                </ul>
                            </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
