import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../../../assets/img/logos_principal/logo_principal.png';
import { FiEye, FiEyeOff } from 'react-icons/fi'; 
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'; 

const backgrounds = [
    '/src/assets/img/logos_principal/fondo1.jpeg',
    '/src/assets/img/logos_principal/fondo2.jpeg',
    '/src/assets/img/logos_principal/fondo3.jpeg',
    '/src/assets/img/logos_principal/fondo4.jpeg',
    
];

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [currentBackground, setCurrentBackground] = useState(0);
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Por favor, completa todos los campos.');
        } else {
            console.log('Login', { email, password, rememberMe });
            setError('');
            navigate('/dashboard');
        }
    };

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentBackground(prev => (prev + 1) % backgrounds.length);
        }, 5000); // Cambiar cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='login'>
            <img src={backgrounds[currentBackground]} className="background-image" alt="Fondo" />
            <div className={`wrapper ${isVisible ? 'fade-in' : ''}`}>
                <div id="formContent">
                    <img src={logo} id="icon" alt="User Icon" className="background-logo" />
                    {error && <label className="text-danger">{error}</label>}
                    <h2 >Inicio de sesión</h2>
                    <form onSubmit={login}>
                        <div className="input-group">
                            <input
                                type="email"
                                id="login"
                                className="form-control"
                                name="email"
                                placeholder=" 👤 Usuario"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <div className="password-container">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="🔒 Contraseña "
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span className="password-icon" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </span>
                            </div>
                        </div>
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label htmlFor="remember">Recordar contraseña</label>
                        </div>
                        <div className="button-container">
                            <button type="submit">
                                <span>Iniciar Sesión</span>
                            </button>
                        </div>
                    </form>

                    <div className="footer">
                        <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
                    </div>
                    
                    <div className="social-media">
                        <h3>Conéctate con nosotros</h3>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="social-icon" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="social-icon" />
                            </a>
                            <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
