import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId}=useParams();
    return (
        <div>
            <h2>Welcome to inventory detail : {inventoryId}</h2>
        </div>
    );
};

export default InventoryDetail;