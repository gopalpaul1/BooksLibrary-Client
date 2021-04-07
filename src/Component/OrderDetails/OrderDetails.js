import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderDetails.css'


const OrderDetails = (props) => {
    const {email, name, orderTime, price } = props.order
    return (

        <div>
            <div>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td style={{width:"300px", background:"white"}}>{email}</td>
                            <td style={{width:"360px", background:"white"}}>{name}</td>
                            <td style={{width:"120px", background:"white"}}>${price}</td>
                            <td style={{width:"300px",background:"white"}}>{orderTime}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default OrderDetails;