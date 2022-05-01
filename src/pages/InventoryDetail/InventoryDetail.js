import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory]=useInventoryDetail(inventoryId);

    const handleDelete = id =>{
           const proced = window.confirm('Are you want to delete???')
           if(proced){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
          .then(data => {
            
              if(data.deletedCount>0){
                  const remaining = inventory.filter(i => i._id !== id);
                  setInventory(remaining);
              }
              
          })

           }
    }
    
    return (
        <div style={{textAlign:'center'}} className='inventory-item'>
            <img src={inventory.picture} alt="" />
            <h2>Name: {inventory.name}</h2>
            <h3>Supplier:{inventory.supplierName}</h3>
            <p>Price: {inventory.price}</p>
            <p>id: {inventory._id}</p>
            <p>Discription: {inventory.description}</p>
            <button onClick={() => handleDelete(inventory._id)}>Delivered</button>
        </div>
    );
};

export default InventoryDetail;