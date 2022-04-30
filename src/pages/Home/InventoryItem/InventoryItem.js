import React from 'react';
import './InventoryItem.css';

const InventoryItem = ({inventory}) => {
    const {_id, name,picture, supplierName, price, quantity, description} = inventory;
    return (
        <div className='inventory-item'>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <h3>Supplier:{supplierName}</h3>
            <p>Price: {price}</p>
            <p>quantity: {quantity}</p>
            <p>Discription: {description}</p>
            <button>Update</button>
            
        </div>
    );
};

export default InventoryItem;