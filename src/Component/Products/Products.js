import React from 'react';
import { useHistory } from 'react-router';
import './Products.css'

const Products = (props) => {

    const {name, price, image, id} = props.product
    let history = useHistory()

    const handleAddProduct = (id) => {

        history.push(`/order/${id}`)

    }

    return (

        <div className="ProductsContent">
            <img className="Image" src={image} alt="images"/>
            <h2>{name}</h2>
            <div className="PriceBuy">
                <p>${price}</p>
                <button onClick={() => handleAddProduct(id)} className="button">Buy Now</button>
            </div>
        </div>
    );
};

export default Products;