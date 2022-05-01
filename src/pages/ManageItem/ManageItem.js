import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventory from '../../hooks/useInventory';

const ManageItem = () => {
    const [inventoryItems,setInventoryItems]=useInventory();
    const [user]=useAuthState(auth);
    const [myItems, setmyItems]=useState([]);

    console.log(myItems)

    useEffect(() =>{
            const getItems = async()=>{
                const email = user.email;
                const url = `http://localhost:5000/addItem?email=${email}`;
                const {data} = await axios.get(url);
                setmyItems(data);
            }
            getItems();
    },[user])

    const handleDelete = id =>{
        const proced = window.confirm('Are you sure???');
        if(proced){
          const url = `http://localhost:5000/inventory/${id}`;
          fetch(url, {
              method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              const remaining= inventoryItems.filter(inventory => inventory._id !==id)
              setInventoryItems(remaining)
          })
        }
    }
    return (
        <div>
        <h2 className='text-center text-info m-3'>Manage Items</h2>
    <h4 className='text-center text-info m-3'>Quantity: {inventoryItems.length + myItems.length}</h4>
    
        <div className='programming'>
            {
                inventoryItems.map(inventory => <div className='programming-card' key={inventory._id}>
                    <img src={inventory.picture} alt="" />

                    <div>
                        <h2>Name: {inventory.name}</h2>
                        <h4>supplierName: {inventory.supplierName}</h4>
                        <p>Price:{inventory.price}</p>
                        <p>{inventory.description}</p>
                        <button className='mx-2' onClick={() => handleDelete(inventory._id)}>Delete</button>
                        <Link to="/addinventory">
                        <button>Add New Item</button>
                        </Link>
                    </div>

                </div>)
            }
        </div>
        <div className='programming'>
            {
                myItems.map(myItem => <div className='programming-card' key={myItem._id}>
                    <img src={myItem.picture} alt="" />

                    <div>
                        <h2>Name:{myItem.name}</h2>
                        <h2>supplierName:{myItem.supplierName}</h2>
                        <p>Price:{myItem.price}</p>
                        <p>{myItem.description}</p>
                        <button className='mx-2' onClick={() => handleDelete(myItem._id)}>Delete</button>
                        <Link to="/addinventory">
                        <button>Add New Item</button>
                        </Link>
                    </div>

                </div>)
            }
        </div>
    </div>
    );
};

export default ManageItem;