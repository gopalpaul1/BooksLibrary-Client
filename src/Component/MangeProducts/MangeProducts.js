import React, { useEffect, useState } from 'react';
import Delete from '../Icons/Group 33150.png'

const MangeProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('https://fierce-thicket-77007.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, [])

    const deleteProduct = (id) => {

        fetch(`/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete successfully')
        })

    }
    
    return (
        <div>
            {
                allProducts.map(pd => <div style={{textAlign:"center"}}>

                    <div style={{display:"flex"}}>
                        <p>{pd.name}</p>
                        <p>{pd.price}</p>
                        <button onClick={() => deleteProduct(pd._id)} style={{border:"none"}}><img style={{width:"20px"}} src={Delete} alt="images"/></button>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MangeProducts;