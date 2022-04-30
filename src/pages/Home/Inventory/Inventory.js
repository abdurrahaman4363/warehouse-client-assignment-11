import React, { useEffect, useState } from 'react';
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
            <h2 className='text-center text-primary m-5'>Inventory item: {inventoryItems.length}</h2>

            <div className='inventory-card'>
                {
                    inventoryItems.map(inventory =><InventoryItem
                     key={inventory._id}
                     inventory={inventory}
                    ></InventoryItem> )
                }
            </div>
        </div>
    );
};

export default Inventory;