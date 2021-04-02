import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navContainer">
            <h1>Books Library</h1>
            <div className="navContent">
                <Link className="text" to="/home">Home</Link>
                <Link className="text" to="/order">Orders</Link>
                <Link className="text" to="/admin">Admin</Link>
                <Link className="text" to="/home">Deals</Link>
                <Link className="Login" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;