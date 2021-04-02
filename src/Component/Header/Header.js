import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser] = useContext(UserContext)

    return (
        <div className="navContainer">
            <h1>Books Library</h1>
            <div className="navContent">
                <Link className="text" to="/home">Home</Link>
                <Link className="text" to="/order">Orders</Link>
                <Link className="text" to="/admin">Admin</Link>
                <Link className="text" to="/home">Deals</Link>
                <Link to="/login"><button className="Login">Login</button></Link>
                <br/>
                <p style={{textAlign:"right",color:"darkcyan"}}>{loggedInUser.name}</p>
            </div>
        </div>
    );
};

export default Header;