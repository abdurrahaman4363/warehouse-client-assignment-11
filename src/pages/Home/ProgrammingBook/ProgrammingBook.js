import React, { useEffect, useState } from 'react';
import './ProgrammingBook.css'

const ProgrammingBook = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/programming')
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-info'>Programming Books</h2>
            <div className='programming'>
                {
                    book.map(b => <div className='programming-card' key={b._id}>
                        <img src={b.picture} alt="" />

                        <div>
                            <h2>Name:{b.name}</h2>
                            <p>Price:{b.price}</p>
                            <p>{b.description}</p>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ProgrammingBook;