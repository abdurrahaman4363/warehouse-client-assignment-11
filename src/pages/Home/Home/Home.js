import React from 'react';
import Banner from '../Banner/Banner';
import ElectronicBook from '../ElectronicBook/ElectronicBook';
import Inventory from '../Inventory/Inventory';
import ProgrammingBook from '../ProgrammingBook/ProgrammingBook';
import './Home.css';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Inventory></Inventory>
            <ProgrammingBook></ProgrammingBook>
            <ElectronicBook></ElectronicBook>
        </>
    );
};

export default Home;