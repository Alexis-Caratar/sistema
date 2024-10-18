import React, { useState, useEffect } from 'react';
import { FiX, FiMenu, FiUser, FiLogIn, FiUserPlus, FiFileText, FiLogOut, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import userImage from '../../../assets/img/avatars/avatar.jpg';
import Login from '../../pages/content-layout/login/Login'; // Importa tu componente de inicio de sesión
import '../../../assets/css/Menu/Sliderbar.css'; // Añade estilos específicos si es necesario


function Slider() {
    const [isClosed, setIsClosed] = useState(true);
    const [showLogin, setShowLogin] = useState(false); // Controlador para mostrar el login

    useEffect(() => {
        const savedState = localStorage.getItem('sidebarState');
        if (savedState !== null) {
            setIsClosed(JSON.parse(savedState));
        }
    }, []);

    const toggleSidebar = () => {
        setIsClosed((prevState) => {
            const newState = !prevState;
            localStorage.setItem('sidebarState', JSON.stringify(newState));
            return newState;
        });
    };

    const handleLoginClick = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="d-flex">
            <nav className={`sidebar ${isClosed ? 'd-none' : 'd-block'}`} id="sliderbar">
                <div className="user-profile">
                    <img src={userImage} alt="Usuario" className="user-image" />
                    <h5 className="user-name">Yohan Alexis Caratar</h5>
                    <p className="user-role">Administrador</p>
                </div>

                <div className="sidebar-content">
                    <h5 className="text-light">Menú Principal</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages-profile.html">
                                <FiUser className="me-2" /> Configuraciones
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={handleLoginClick}>
                                <FiLogIn className="me-2" /> Iniciar Sesión
                            </a>
                        </li>
                        {/* Otras opciones de menú... */}
                    </ul>
                </div>

                {/* Sección de salir y redes sociales */}
                <div className="socials">
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FiFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FiTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FiInstagram />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-bs-toggle="tooltip" title="Salir">
                            <FiLogOut className="me-2 text-center" />
                        </a>
                    </div>
                </div>
            </nav>

            <button
                className="navbar-toggler"
                type="button"
                onClick={toggleSidebar}
                aria-controls="sliderbar"
                aria-expanded={!isClosed}
                aria-label="Toggle navigation"
                style={{ position: 'fixed', zIndex: 1050, left: '1rem', top: '1rem' }}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Componente de inicio de sesión */}
            {showLogin && <Login />}
        </div>
    );
}

export default Slider;
