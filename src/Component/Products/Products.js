import React from 'react';
import './Products.css'

const Products = (props) => {
    const {name, price, image} = props.product

    return (

        <div className="ProductsContent">
            <img className="Image" src={image} alt="images"/>
            <h2>{name}</h2>
            <div className="PriceBuy">
                <p>${price}</p>
                <button className="button">Buy Now</button>
            </div>
        </div>
    );
};

export default Products;