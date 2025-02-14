import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './navbar.css';
import { Button } from "./Button";

function Navbar() {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
        setClick(false);
        setDropdownOpen(false);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const services = [
        { path: '/hotels', icon: 'fa-hotel', name: 'Hôtels', description: 'Trouvez l\'hébergement parfait' },
        { path: '/restaurants', icon: 'fa-utensils', name: 'Restaurants', description: 'Découvrez la gastronomie locale' },
        { path: '/museums', icon: 'fa-landmark', name: 'Musées', description: 'Explorez la culture et l\'histoire' },
        { path: '/tours', icon: 'fa-route', name: 'Tours', description: 'Visitez les meilleurs endroits' },
        { path: '/locations', icon: 'fa-map-marker-alt', name: 'Locations', description: 'Louez ce dont vous avez besoin' },
        { path: '/medical', icon: 'fa-hospital', name: 'Services Médicaux', description: 'Assistance médicale' },
        { path: '/transport', icon: 'fa-bus', name: 'Transport', description: 'Déplacez-vous facilement' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    Voyagez <span className="logo-dot">.</span>
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <span className={`menu-line ${click ? 'active' : ''}`}></span>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-home nav-icon"></i>
                            Accueil
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-links' onClick={toggleDropdown}>
                            <i className="fas fa-concierge-bell nav-icon"></i>
                            Services <i className={`fas fa-chevron-down ${dropdownOpen ? 'rotate' : ''}`}></i>
                        </a>
                        {dropdownOpen && (
                            <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                                {services.map((service, index) => (
                                    <Link 
                                        key={index}
                                        to={service.path} 
                                        className='dropdown-link' 
                                        onClick={closeMobileMenu}
                                    >
                                        <i className={`fas ${service.icon}`}></i>
                                        <span>{service.name}</span>
                                        <small>{service.description}</small>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-user nav-icon"></i>
                            S'inscrire
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                            Dashboard
                        </Link>
                    </li>
                </ul>

                <div className="nav-auth">
                    <Button buttonStyle='btn--outline'>Se connecter</Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;