import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-fixed">
            <nav className="z-depth-0">
                <div className="nav-wrapper white text-center">
                    <Link
                        to="/"
                        style={{ fontFamily: "montserrat" }}
                        className="brand-logo center black-text"
                    >
                        MERN Stack Development
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;