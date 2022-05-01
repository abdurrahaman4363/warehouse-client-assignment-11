import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory]=useInventoryDetail(inventoryId)
    return (
        <div style={{textAlign:'center'}} className='inventory-item'>
            <img src={inventory.picture} alt="" />
            <h2>Name: {inventory.name}</h2>
            <h3>Supplier:{inventory.supplierName}</h3>
            <p>Price: {inventory.price}</p>
            <p>id: {inventory._id}</p>
            <p>Discription: {inventory.description}</p>
            <form>
                <input type="text" name='name' placeholder='name' required /><br />
                <input type="text" name='name' placeholder='name' required /><br />
                <input type="text" name='name' placeholder='name' required /><br />
                <input type="text" name='name' placeholder='name' required /><br />
                <input type="text" name='name' placeholder='name' required /><br />
            </form>
        </div>
    );
};

export default InventoryDetail;