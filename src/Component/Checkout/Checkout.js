import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'
import { useContext } from 'react';
import { UserContext } from '../../App';

const Checkout = () => {
    let { id } = useParams()
    console.log(id)
    const [product, setProduct] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {

        fetch(`https://fierce-thicket-77007.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => setProduct(data))

    }, [])

    const producted = product.find(pd => pd._id === id)

    const history = useHistory()

    const handleOrderDetails = () => {

        const ordersDetails = {...loggedInUser, ...producted, orderTime : new Date().toDateString('dd.MM.yyyy')}
        console.log(ordersDetails)

        fetch('https://fierce-thicket-77007.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ordersDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Order successfully")
            }
        })
    }

    
    return (
        <div className="CheckoutPd">
            <h2>Checkout</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{producted?.name}</td>
                    <td>1</td>
                    <td>${producted?.price}</td>
                    </tr>
                    <tr>
                    <td>Total</td>
                    <td></td>
                    <td>${producted?.price}</td>
                    </tr>
                </tbody>
            </Table>
            <button onClick={() => handleOrderDetails()} className="Checkout">Checkout</button>
        </div>
    );
};

export default Checkout;