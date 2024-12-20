// src/components/Navbar.js

import React from 'react';
import { Link, } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <Link className="navbar-brand " to="/"><b>MOVIE STORE</b></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    
                        <li className="nav-item">
                                <Link className="nav-link" to="/movielist"><h5>Movie</h5></Link>
                            </li>
                
                            <li className="nav-item">
                                <Link className="nav-link" to="/subscription"><h5>Subscription</h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/myplan"><h5>My plan</h5></Link>
                            </li>
                            <li className="nav-item dropdown">
                             <a className="nav-link dropdown-toggle text-black" href="#" data-toggle="dropdown"><i className="fa fa-bars"></i></a>    
                            <ul className="dropdown-menu text-black bg-secondary" >
                                <li><a className="dropdown-item" href="/watchlater"><h6>Watch Later</h6></a></li>
                                <li><a className="dropdown-item" href="/watchhistory"><h6>Watch History</h6></a></li>
                                
                            </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/changepass"><h5>Change Password</h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><h5>Logout</h5></Link>
                        </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
