import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import Delete from '../Icons/Group 33150.png'
import Edit from '../Icons/edit 1.png'
import './MangeProducts.css'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MangeProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('https://fierce-thicket-77007.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, [])

    const deleteProduct = (event,id) => {
        
        console.log(id)

        fetch(`https://fierce-thicket-77007.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result){
                return event.target.parentNode.style.display = "none"
            }
        })

    }
    
    return (
        <div className='MangeProduct'>
            <AdminHeader />
            <div className="booksContainer">

                <div className="ProductTable">
                    <p style={{marginRight:"210px",marginLeft:"10px"}}>Product</p>
                    <p style={{marginRight:"65px"}}>Weight</p>
                    <p style={{marginRight:"65px"}}>Price</p>
                    <p>Action</p>
                </div>
                {
                    allProducts.map(pd => <div>
                        <Table style={{width:"600px"}} striped bordered hover>
                            <tbody>
                                <tr>
                                    <td style={{width:"280px"}}>{pd.name}</td>
                                    <td>{pd.weight} gm</td>
                                    <td>${pd.price}</td>
                                    <td><button onClick={() => deleteProduct(Event, pd._id)} style={{border:"none"}}><img style={{width:"20px",marginRight:"20px"}} src={Delete} alt="images"/><img style={{width:"20px", backgroundColor:"green", borderRadius:"3px"}} src={Edit} alt="images"/></button></td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>)
                }
            </div>

        </div>
    );
};

export default MangeProducts;