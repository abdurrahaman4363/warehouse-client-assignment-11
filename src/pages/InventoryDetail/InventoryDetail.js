import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    return (
        <div style={{textAlign:'center'}} className='inventory-item'>
            <img src={inventory.picture} alt="" />
            <h2>Name: {inventory.name}</h2>
            <h3>Supplier:{inventory.supplierName}</h3>
            <p>Price: {inventory.price}</p>
            <p>id: {inventory._id}</p>
            <p>Discription: {inventory.description}</p>
        </div>
    );
};

export default InventoryDetail;