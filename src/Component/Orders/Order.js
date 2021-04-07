import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Order.css'

const Order = () => {

    const [orders, setOrders] = useState([])
    const[loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch(`https://fierce-thicket-77007.herokuapp.com/orders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])


    return (

        <div>
            <h2 className="orderInfo">Order Information</h2>
            <div className='orderTable'>
                <Table striped bordered hover className="Table">
                    <thead>
                        <tr>
                        <th style={{width:"264px"}}>User Email</th>
                        <th style={{width:"190px"}}>Product</th>
                        <th>Price</th>
                        <th>OrderTime</th>
                        </tr>
                    </thead>
                </Table>

                {
                    orders.map(order => <OrderDetails order = {order}/>)
                }

            </div>
        </div>

        
    );
};

export default Order;