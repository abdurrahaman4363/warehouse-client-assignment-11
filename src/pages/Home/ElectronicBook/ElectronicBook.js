import React, { useEffect, useState } from 'react';
import electric from '../../../images/banner/electric.jpg'
import electric1 from '../../../images/banner/electric1.jpg'


const ElectronicBook = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('https://secret-temple-12735.herokuapp.com/electronic')
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-info m-3'>Electronic Books</h2>

            <div className='book-container'>
                <div className='electronic-design ms-3' >

                    <h2>Electronics Engineering Books of All Time</h2>
                    <p>The Electrical and Electronics Reference Manual for the Electrical and Computer PE Exam is the best source for the information you need to pass the Electrical and Electronics exam. Developed for candidates seeking focused Electrical and Electronics exam coverage, this comprehensive text aligns with and covers all the topics on the NCEES Electrical and Electronics exam specifications.Best-selling author, John A. Camara, PE, draws upon his professional experience and his years as an instructor to provide clear and focused explanations of the exam topics using step-by-step example problems.</p>
                    <button className='btn btn-primary'>Buy Book</button>
                    <button className='ms-3 btn btn-primary'>See Update</button>
                   <div className='circuit-img'>
                   <div className='circuit-images mt-3 text-center'>
                        <img src={electric} alt="" />
                        <img src={electric1} alt="" />
                    </div>
                    <div className='mt-3'>
                        <p>An electronic circuit is a structure that directs and controls electric current to perform various functions including signal amplification, computation, and data transfer. It comprises several different components such as resistors, transistors, capacitors, inductors, and diodes.</p>
                        <button className='btn btn-primary'>Click Here</button>
                    </div>
                   </div>
                   <div>
                       <p>A circuit diagram is a graphical representation of an electrical circuit. A pictorial circuit diagram uses simple images of components, while a schematic diagram shows the components and interconnections of the circuit using standardized symbolic representations.</p>
                       <p>An electronic circuit is composed of individual electronic components, such as resistors, transistors, capacitors, inductors and diodes, connected by conductive wires or traces through which electric current can flow. The Transfer Function of a circuit is defined as the ratio of the output signal to the input signal in the frequency domain, and it applies only to linear time-invariant systems.</p>
                   </div>
                </div>




                {
                    book.slice(0, 1).map(b => <div className='book-card' key={b._id}>
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

export default ElectronicBook;