


import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'

import './Navbar.css'

export default function Navbar(props) {
    return (
        <>
            <nav>
                <div className="menu-bar">
                    <h1 className='title'><Link to="/shabdsankalp">{props.title}</Link></h1>
                    <div className="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li><Link to="shabdsankalp/about">About us</Link></li>
                        <li><Link to="shabdsankalp/services">Services</Link></li>
                        <li><Link to="shabdsankalp/sitemap">Site map</Link></li>
                        <li><Link to="shabdsankalp/login">login</Link></li>
                        <li><Link to="shabdsankalp/contact">Contact us</Link></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Master Therapy"
}
