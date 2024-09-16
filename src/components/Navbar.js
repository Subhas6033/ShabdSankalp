import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useTranslation } from 'react-i18next';
import './Navbar.css';

export default function Navbar(props) {
    const [animate, setAnimate] = useState(false);
    // const { i18n } = useTranslation();

    useEffect(() => {
        setAnimate(true);
    }, []);

    // const handleLanguageChange = (e) => {
    //     i18n.changeLanguage(e.target.value); 
    // };

    return (
        <nav className={animate ? 'navbar-animation' : ''}>
            <div className="menu-bar">
                <h1 className='title'>
                    <Link to="/shabdsankalp">{props.title}</Link>
                </h1>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li><Link to="/shabdsankalp/services">Book an appointment</Link></li>
                    <li><Link to="/shabdsankalp/sitemap">Site map</Link></li>
                    <li><Link to="/shabdsankalp/login">Login</Link></li>
                    <li><Link to="/shabdsankalp/contact">Contact us</Link></li>
                    <li>
                        <select name="language" id="language">
                            <option value="en">English</option>
                            <option value="bn">Bangla</option>
                            <option value="hi">Hindi</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Shabd Sankalp"
}
