import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddInventory = () => {
    const [user] = useAuthState(auth);
    
    const handleAddItem = event =>{
        event.preventDefault();
        const addItem = {
            name:event.target.name.value,
            supplierName:event.target.supplierName.value,
            email:user.email,
            description:event.target.description.value,
            price:event.target.price.value,
            picture:event.target.photoURL.value
    
        }
        axios.post('http://localhost:5000/addItem', addItem)
        // axios.post('http://localhost:5000/inventory', addItem)
        .then(Response =>{
            const {data}=Response;
            if(data.insertedId){
               toast('item is added!!!')
               event.target.reset();
            }
        })
        
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary'>Add new item</h2>
            
            <form onSubmit={handleAddItem} className='register'>
                <input className='w-100 mb-2' type="text" name="name" placeholder='name'  id="" />
                <input className='w-100 mb-2' type="text" name="supplierName" placeholder='supplierName'  id="" />
                <input className='w-100 mb-2' value={user?.email} type="email" name="email" placeholder='email' readOnly required id="" />
                <textarea className='w-100 mb-2' type="text" name="description" placeholder='description'  id="" />
                <input className='w-100 mb-2' type="number" name="price" placeholder='price'  id="" />
                <input className='w-100 mb-2' type="text" name="photoURL" placeholder='Photo URL'  id="" />
                <input type="submit" value="Add item"/>
            </form>
        </div>
    );
};

export default AddInventory;