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
            <h2 className='text-center text-info m-3'>Programming Books</h2>
            <div>
                <div className='book-container'>
                
                {
                    book.slice(0,1).map(b => <div className='book-card' key={b._id}> 
                        <img src={b.picture} alt="" />

                        <div>
                            <h2>Name:{b.name}</h2>
                            <p>Price:{b.price}</p>
                            <p>{b.description}</p>
                        </div>

                    </div>)
                }
        
            <div>
                <h2 className='text-center'>Details About Programming Books</h2>
              <div>
            
              <p>Programming is one of the most sought-after professional fields in the world. It presents candidates with a galore of opportunities to learn and earn. It, however, requires continuous learning and what can be better than books to learn from!</p>
                
                <h4>****Choose One****</h4>
                <p>1.The Self-Taught Programmer: The Definitive Guide to Programming Professionally by Cory Althoff</p>
                <p>2.Make Your Own Neural Network by Tariq Rashid</p>
                <p>3.Managing Humans: Biting and Humorous Tales of a Software Engineering Manager by Michael Lopp</p>
                <p>4.The Pragmatic Programmer: From Journeyman to Master by Andrew Hunt and David Thomas</p>
                <p>5.Learning JavaScript Design Patterns by Addy Osmani</p>
                <dir className='text-center'><button className='btn btn-dark '>More Book</button></dir>
              </div>

            </div>
                </div>
            </div>
        </div>
    );
};

export default ProgrammingBook;