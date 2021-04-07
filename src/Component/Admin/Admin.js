import './Admin.css'
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminHeader from '../AdminHeader/AdminHeader';


const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] =useState(null)

    const onSubmit = data => {
        const products = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        }
        console.log(products)
        const url = `https://fierce-thicket-77007.herokuapp.com/addProduct`
        
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '0f6bd852198a03ae2769a2a95d591345')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }


    return (
        <div className="BooksContainer">

            <AdminHeader />

            <div>
                <h2>Add Book</h2>
                <form className="AddFrom" onSubmit={handleSubmit(onSubmit)}>
                <input className="InputFiled" name="name" defaultValue="Add Product" ref={register} />
                <br/>
                <input className="InputFiled" name="weight" defaultValue="Add weight" ref={register} />
                
                <br/>
                <input className="InputFiled" name="price" defaultValue="Add Price" ref={register} />
                <br/>
                <input className="InputFiled" name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br/>
                <input className="Submit" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;