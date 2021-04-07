import React from 'react';
import { Link } from 'react-router-dom';
import ManageIcon from '../Icons/grid 1.png'
import AddIcon from '../Icons/plus 1.png'
import EditIcon from '../Icons/edit 1.png'
import './AdminHeader.css'

const AdminHeader = () => {
    return (
        <div>
            <div className="BooksHeader">
                <h3 className="adminHeading">Books Library</h3>
                <Link className="filed" to="/manageProducts"><img src={ManageIcon} style={{width:"20px"}} alt="icons"/> Manage Books</Link>
                <br/>
                <Link className="filed" to="/Admin"> <img src={AddIcon} style={{width:"20px"}} alt="icons"/> Add Book</Link>
                <br/>
                <Link className="filed" to="/Admin"><img src={EditIcon} style={{width:"20px"}} alt="icons"/> Edit Book</Link>
            </div>
        </div>
    );
};

export default AdminHeader;