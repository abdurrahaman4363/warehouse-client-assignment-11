import { useEffect, useState } from "react";

const useInventory = ()=>{
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() =>{
        fetch('https://secret-temple-12735.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setInventoryItems(data))
    },[]);
    return [inventoryItems, setInventoryItems]
}

export default useInventory;