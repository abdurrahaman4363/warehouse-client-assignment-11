import React from 'react';
import ElectronicBook from '../ElectronicBook/ElectronicBook';
import Inventory from '../Inventory/Inventory';
import ProgrammingBook from '../ProgrammingBook/ProgrammingBook';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Inventory></Inventory>
            <ProgrammingBook></ProgrammingBook>
            <ElectronicBook></ElectronicBook>
        </div>
    );
};

export default Home;