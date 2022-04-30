import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({inventory}) => {
    const {_id, name,picture, supplierName, price, quantity, description} = inventory;
    

    const navigate = useNavigate();
    const navigateToInventoryDetail = id =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='inventory-item'>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <h3>Supplier:{supplierName}</h3>
            <p>Price: {price}</p>
            <p>quantity: {quantity}</p>
            <p>Discription: {description}</p>
            <button onClick={()=>navigateToInventoryDetail(_id)} className='btn btn-dark'>Update</button>
            
        </div>
    );
};

export default InventoryItem;