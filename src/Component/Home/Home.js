import React, { useEffect, useState } from 'react';
import fakeData from '../fakeData/fakeData.json'
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        setProducts(fakeData)

    }, [])
    return (
        <div>
            <div>

            </div>
            <div>
                {
                    products.map(product => <Products product={product}/>)
                }
            </div>
        </div>
    );
};

export default Home;