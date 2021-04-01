import React from 'react';
import fakeData from '../fakeData/fakeData.json'
const Admin = () => {
    const handleClick = () =>{
        fetch('http://localhost:5045/addProduct',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })

    }
    return (
        <div>
            <button onClick={handleClick}>Add product</button>
        </div>
    );
};

export default Admin;