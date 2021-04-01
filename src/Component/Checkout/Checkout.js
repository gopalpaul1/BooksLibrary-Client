import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css'

const Checkout = (props) => {

    const {name, price} = props.product

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
                    <td>{name}</td>
                    <td>1</td>
                    <td>${price}</td>
                    </tr>
                    <tr>
                    <td>Total</td>
                    <td></td>
                    <td>${price}</td>
                    </tr>
                </tbody>
            </Table>
            <button className="Checkout">Checkout</button>
        </div>
    );
};

export default Checkout;