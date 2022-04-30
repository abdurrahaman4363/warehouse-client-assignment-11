import React from 'react';
import notfound from '../../images/banner/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>404 NotFound</h2>
            <div className='text-center'>
            <img style={{height:'300px', width:'300px'}} src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;