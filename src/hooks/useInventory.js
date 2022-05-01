import { useEffect, useState } from "react";

const useInventory = ()=>{
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventoryItems(data))
    },[]);
    return [inventoryItems, setInventoryItems]
}

export default useInventory;