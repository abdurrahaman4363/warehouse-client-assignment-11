import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css'

const Inventory = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventoryItems(data))
    },[])
    
    return (
        <div>
            <h2 className='text-center text-primary m-5'>Inventory item:</h2>
            <h4 className='text-center text-primary'>Quantity: {inventoryItems.slice(0,6).length}</h4>

            <div className='inventory-card'>
                {
                  inventoryItems.slice(0, 6).map(inventory =><InventoryItem
                     key={inventory._id}
                     inventory={inventory}
                    ></InventoryItem> )
                }
            </div>
            <div className='text-center'>
            <Link to="/manageitem">
            <button className='btn btn-dark'>Manage Inventories</button>
            </Link>
            </div>
        </div>
    );
};

export default Inventory;