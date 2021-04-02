import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css'


const Home = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://fierce-thicket-77007.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (

        <div className="ProductsContainer">
            {
                products.map(product => <Products product={product} />)
            }
        </div>
    );
};

export default Home;