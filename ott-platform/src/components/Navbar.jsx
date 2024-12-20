// src/components/Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    // function handleLogout() {
    //     localStorage.removeItem('isAuthenticated');
    //     localStorage.removeItem('currentUser');
    //     navigate('/login');
    // }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <Link className="navbar-brand " to="/"><b>MOVIE STORE</b></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><h5>Home</h5></Link>
                            </li>
                
                            <li className="nav-item">
                                <Link className="nav-link" to="/register"><h5>Register</h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"><h5>Login</h5></Link>
                            </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
