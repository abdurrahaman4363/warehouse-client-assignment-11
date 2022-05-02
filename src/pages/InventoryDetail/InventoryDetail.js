import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useInventoryDetail(inventoryId);

   



    const decreaseQuantity= (quantity1)=>{
         const quantity = parseInt(quantity1) - 1;
         
         const addQuantity = {quantity}
         const url = `https://secret-temple-12735.herokuapp.com/inventory/${inventoryId}`
         fetch(url, {
             method:'PUT',
             headers:{'content-type':'application/json'},
             body:JSON.stringify(addQuantity)
         })
         .then(res => res.json())
         .then(data => {
             console.log(data);
            toast('Decrease quantity!!! reload for checking')
         })
    }

    const handleAddQuantity = event =>{
        event.preventDefault();
        const getQuantity = parseInt(event.target.quantity.value);
          
        
            const quantity = parseInt(inventory.quantity)+ parseInt(getQuantity);
            const addQuantity={quantity}
            const url = `https://secret-temple-12735.herokuapp.com/inventory/${inventoryId}`
            fetch(url, {
                method:'PUT',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(addQuantity)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Increase quantity!!! reload for checking')
                event.target.reset();
            })
        
       
    }

    return (
        <div>
            <div style={{ textAlign: 'center' }} className='inventory-item'>
                <img src={inventory.picture} alt="" />
                <h2>Name: {inventory.name}</h2>
                <h3>Supplier:{inventory.supplierName}</h3>
                <h4>Quantity: {inventory.quantity}</h4>
                <p>Price: {inventory.price}</p>
                <p>Sold: yes</p>
                <p>id: {inventory._id}</p>
                <p>Discription: {inventory.description}</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                        <button className='btn btn-dark' onClick={() => decreaseQuantity(inventory.quantity)}>Delivered</button>
                    </div>
                    <div className='m-3 bg-primary'>
                        <form  onSubmit={handleAddQuantity}>
                            <input className='mb-2' type="number"  name="quantity" id="" placeholder='quantity' /><br />
                            <input className='mb-2' type="submit" value="Add Quantity" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='text-center mt-3'>
                <Link to="/manageitem">
                    <button className='btn btn-dark'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;