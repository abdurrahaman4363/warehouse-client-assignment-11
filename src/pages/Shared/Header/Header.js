import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/banner/logo.jpg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user]=useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            </Nav>
            <Nav>
              {
                user? <Nav.Link as={Link} to="/manageitem">Manage Items</Nav.Link>:''
              }
              {
                user? <Nav.Link as={Link} to="/addinventory">Add Item</Nav.Link>:''
              }
              {
                user? <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>:''
              }
              
              
              {
                user ?
                  <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                 :
                <Nav.Link eventKey={2} as={Link} to="/login">
                Login
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;