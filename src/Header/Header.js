import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';



const Header = () => {
    
    const { user, logOut } = useAuth();

    return (
        <div >
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container className="my-4 fs-4" >
                <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home" className="text-decoration-none text-white ms-5">Home</NavLink>
                        <NavLink to="/about" className="text-decoration-none text-white ms-5">About</NavLink>
                        <NavLink to="/services" className="text-decoration-none text-white ms-5">Services</NavLink>
                        <NavLink to="/private-one" className="text-decoration-none text-white ms-5">My Private One</NavLink>
                        <NavLink to="/private-two" className="text-decoration-none text-white ms-5">My Private Two</NavLink>
                    </Nav>
                    <Nav>
                        <span className="text-white me-2 mb-2 mt-2">{user.displayName}</span>
                        {
                            user.email ? 
                            <button className="rounded py-2 px-3  py-sm-2 px-sm-3" onClick={logOut}>Sign Out</button>
                            :
                            <NavLink className="text-decoration-none text-white" to='/login' href="#deets">Login</NavLink>  
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;