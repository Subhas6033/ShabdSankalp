import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger the animation when the component mounts
        setAnimate(true);
    }, []);

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
                    <li><Link to="shabdsankalp/services">Services</Link></li>
                    <li><Link to="shabdsankalp/sitemap">Site map</Link></li>
                    <li><Link to="shabdsankalp/login">Login</Link></li>
                    <li><Link to="shabdsankalp/contact">Contact us</Link></li>
                    <li>
                        <select name="language" id="language">
                            <option value="bengali">Bangla</option>
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
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