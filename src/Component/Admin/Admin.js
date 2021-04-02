import './Admin.css'
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import ManageIcon from '../Icons/grid 1.png'
import AddIcon from '../Icons/plus 1.png'
import EditIcon from '../Icons/edit 1.png'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] =useState(null)

    const onSubmit = data => {
        const products = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }

        const url = `http://localhost:5045/addProduct`
        console.log(products)
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

            <div className="BooksHeader">
                <Link className="filed" to="/manageProducts"><img src={ManageIcon} style={{width:"20px"}} alt="icons"/> Manage Books</Link>
                <br/>
                <Link className="filed" to="/Admin"> <img src={AddIcon} style={{width:"20px"}} alt="icons"/> Add Book</Link>
                <br/>
                <Link className="filed" to="/Admin"><img src={EditIcon} style={{width:"20px"}} alt="icons"/> Edit Book</Link>
            </div>

            <div>
                <h2>Add Book</h2>
                <form className="AddFrom" onSubmit={handleSubmit(onSubmit)}>
                <input className="InputFiled" name="name" defaultValue="Add Product" ref={register} />
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