import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-dark text-white p-5'>
            <p>Copyright&copy; {year}</p>
            <h3>About</h3>
            <p>General book</p>
            <p>Electronic book</p>
            <p>Programming book</p>
        </footer>
    );
};

export default Footer;