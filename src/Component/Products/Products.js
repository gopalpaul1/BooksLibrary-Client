import React from 'react';
import { useHistory } from 'react-router';
import './Products.css'

const Products = (props) => {

    const {name, price, imageURL, _id} = props.product
    let history = useHistory()

    const handleAddProduct = (id) => {

        history.push(`/checkout/${id}`)

    }

    return (

        <div className="ProductsContent">
            <img className="Image" src={imageURL} alt="images"/>
            <h3>{name}</h3>
            <div className="PriceBuy">
                <p>${price}</p>
                <button onClick={() => handleAddProduct(_id)} className="button">Buy Now</button>
            </div>
        </div>
    );
};

export default Products;