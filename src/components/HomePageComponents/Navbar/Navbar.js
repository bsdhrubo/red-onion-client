import React from 'react';
import logo from '../../../images/logo2.png';
import cartIcon from '../../../images/icon/Group 287.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light ">
                <Link className="navbar-brand" to="#">
                    <img src={logo} alt="" height="50" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item text-dark">
                            <Link className="nav-link" to="#">CartIcon</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;