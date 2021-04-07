import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
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

        <div>
            <p className="search"><input className="input" placeholder="Search Book" type="search" name="search"/><button className="Search">Search</button></p>
            {/* <Spinner animation="border" /> */}
            <div className="ProductsContainer">
                {
                    products.map(product => <Products product={product} key={product._id} />)
                }
            </div>
        </div>

    );
};

export default Home;