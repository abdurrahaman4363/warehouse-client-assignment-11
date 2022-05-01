import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useInventory from '../../hooks/useInventory';

const MyItems = () => {
    const [user]=useAuthState(auth);
    const [myItems, setmyItems]=useState([]);

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
          const url = `http://localhost:5000/addItem/${id}`;
          fetch(url, {
              method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              const remaining= myItems.filter(inventory => inventory._id !==id)
              setmyItems(remaining)
          })
        }
    }
    return (
        <div>
            <h2 className='text-center'>My Items: {myItems.length} </h2>
            <div className='programming'>
            {
                myItems.map(myItem => <div className='programming-card' key={myItem._id}>
                    <img src={myItem.picture} alt="" />

                    <div>
                        <h2>Name:{myItem.name}</h2>
                        <p>Price:{myItem.price}</p>
                        <p>{myItem.description}</p>
                        <button className='mx-2' onClick={() => handleDelete(myItem._id)}>Delete</button>
                    </div>

                </div>)
            }
        </div>
        </div>
    );
};

export default MyItems;