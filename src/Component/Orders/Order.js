import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Checkout from '../Checkout/Checkout';

const Order = () => {
    let { id } = useParams();
    console.log(id)
    
    const [product, setProduct] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5045/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))

    }, [id])
    return (
        <div>
            {
                product.map(pd => <Checkout product={pd} />)
            }
        </div>
    );
};

export default Order;