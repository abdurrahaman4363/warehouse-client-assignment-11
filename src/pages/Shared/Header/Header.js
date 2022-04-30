import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/banner/logo.jpg'
const Header = () => {
    return (
        <>
            <Navbar sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img height="30px" src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Blogs">Blogs</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;