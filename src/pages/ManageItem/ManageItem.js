import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventory from '../../hooks/useInventory';
import './ManageItem.css'

const ManageItem = () => {
    const [inventoryItems, setInventoryItems] = useInventory();
    const [user] = useAuthState(auth);
    const [myItems, setmyItems] = useState([]);

    const [add, setAdd] = useState([]);

    useEffect(() => {
        fetch('https://secret-temple-12735.herokuapp.com/add')
            .then(res => res.json())
            .then(data => setAdd(data))
    }, []);

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://secret-temple-12735.herokuapp.com/addItem?email=${email}`;
            const { data } = await axios.get(url);
            setmyItems(data);
        }
        getItems();
    }, [user])


    // method one
    const handleDelete = id => {
        const proced = window.confirm('Are you sure???');
        if (proced) {
            const url = `https://secret-temple-12735.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = inventoryItems.filter(inventory => inventory._id !== id)
                    setInventoryItems(remaining)
                })
        }
    }

    // method three
    const handleAddDelete = id => {
        const proced = window.confirm('Are you sure???');
        if (proced) {
            const url = `https://secret-temple-12735.herokuapp.com/add/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = add.filter(inventory => inventory._id !== id)
                    setAdd(remaining)
                })
        }
    }
    return (
        <div>
            <h2 className='text-center text-info m-3'>Manage Items</h2>
            <h4 className='text-center text-info m-3'>Quantity: {inventoryItems.length + add.length}</h4>
           <div className='programming'>
                {/* method one */}
            
                {
                    inventoryItems.map(inventory => <div className='programming-card' key={inventory._id}>
                        <img src={inventory.picture} alt="" />

                        <div>
                            <h2>Name: {inventory.name}</h2>
                            <h4>supplierName: {inventory.supplierName}</h4>
                            <p>Price:{inventory.price}</p>
                            <p>{inventory.description}</p>
                            <button className='mx-2 btn btn-dark' onClick={() => handleDelete(inventory._id)}>Delete</button>
                            <Link to="/addinventory">
                                <button className='btn btn-dark'>Add New Item</button>
                            </Link>
                        </div>

                    </div>)
                }
            
            {/* method two */}
           {/*  <div>
                {
                    myItems.map(myItem => <div className='programming-card' key={myItem._id}>
                        <img src={myItem.picture} alt="" />

                        <div>
                            <h2>Name:{myItem.name}</h2>
                            <h2>supplierName:{myItem.supplierName}</h2>
                            <p>Price:{myItem.price}</p>
                            <p>{myItem.description}</p>
                            <div>
                                <button className='mx-2 btn btn-dark' onClick={() => handleDelete(myItem._id)}>Delete</button>
                                <Link to="/addinventory">
                                    <button className='btn btn-dark'>Add New Item</button>
                                </Link>
                            </div>
                        </div>

                    </div>)
                }
            </div> */}
            {/* method three */}
            
                {
                    add.map(a => <div className='programming-card' key={a._id}>
                        <img src={a.picture} alt="" />

                        <div>
                            <h2>Name:{a.name}</h2>
                            <h2>supplierName:{a.supplierName}</h2>
                            <p>Price:{a.price}</p>
                            <p>{a.description}</p>
                            <div>
                                <button className='mx-2 btn btn-dark' onClick={() => handleAddDelete(a._id)}>Delete</button>
                                <Link to="/addinventory">
                                    <button className='btn btn-dark'>Add New Item</button>
                                </Link>
                            </div>
                        </div>

                    </div>)
                }
        
           </div>
        </div>
    );
};

export default ManageItem;