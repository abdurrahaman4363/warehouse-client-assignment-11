import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import useInventory from '../../hooks/useInventory';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setmyItems] = useState([]);
    const [addMyItem, setAddMyItem] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://secret-temple-12735.herokuapp.com/addItem?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setmyItems(data);
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getItems();
    }, [user])

     // for single person
    
    /* useEffect(() => {

        const getAddMyItem = async()=>{
            const email = user.email;
            const url = `https://secret-temple-12735.herokuapp.com/addMyItem?email=${email}`;
            
           const {data} = await axios.get(url);
           setAddMyItem(data);
        }

        getAddMyItem();
        

    }, [user]) */

    const handleDelete = id => {
        const proced = window.confirm('Are you sure???');
        if (proced) {
            const url = `https://secret-temple-12735.herokuapp.com/addItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = myItems.filter(inventory => inventory._id !== id)
                    setmyItems(remaining)
                })
        }
    }
    /* const handleAddDelete = id => {
        const proced = window.confirm('Are you sure???');
        if (proced) {
            const url = `https://secret-temple-12735.herokuapp.com/add/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = addMyItem.filter(inventory => inventory._id !== id)
                    setAddMyItem(remaining)
                })
        }
    } */
    return (
        <div>
            <h2 className='text-center'>My Items: {myItems.length} </h2>
            {/* <h2 className='text-center'>My Items: {addMyItem.length} </h2> */}
            <div className='programming'>
               {/*  {
                    addMyItem.map(addMyItems => <div className='programming-card' key={addMyItems._id}>
                        <img src={addMyItems.picture} alt="" />

                        <div>
                            <h2>Name:{addMyItems.name}</h2>
                            <p>Price:{addMyItems.price}</p>
                            <p>{addMyItems.description}</p>
                            <button className='mx-2' onClick={() => handleAddDelete(addMyItems._id)}>Delete</button>
                        </div>

                    </div>)
                } */}
                {
                    myItems.map(myItem => <div className='programming-card' key={myItem._id}>
                        <img src={myItem.picture} alt="" />

                        <div>
                            <h2>Name:{myItem.name}</h2>
                            <p>Price:{myItem.price}</p>
                            <p>{myItem.description}</p>
                            <button className='mx-2' onClick={() => handleDelete(myItem._id)}>Delete</button>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;