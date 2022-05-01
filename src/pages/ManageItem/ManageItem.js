import React from 'react';
import useInventory from '../../hooks/useInventory';

const ManageItem = () => {
    const [inventoryItems,setInventoryItems]=useInventory();

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
        <div className='programming'>
            {
                inventoryItems.map(inventory => <div className='programming-card' key={inventory._id}>
                    <img src={inventory.picture} alt="" />

                    <div>
                        <h2>Name:{inventory.name}</h2>
                        <p>Price:{inventory.price}</p>
                        <p>{inventory.description}</p>
                        <button onClick={() => handleDelete(inventory._id)}>X</button>
                    </div>

                </div>)
            }
        </div>
    </div>
    );
};

export default ManageItem;