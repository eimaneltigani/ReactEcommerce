import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button, Col } from 'react-bootstrap';
import '../css/NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav">
                <Navbar bg='light' expand='lg' id="navbar">
                    <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav> 
                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="products/Beauty">Beauty</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="products/Wellness">Wellness</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="products/Essential">Essentials</Link></NavDropdown.Item>
                            </NavDropdown> 
                        </Nav>
                        <Link to="About">About Us</Link> 
                        <Form className='d-flex m-auto'>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <Nav className="ml-auto"><Link to={`/cart`}>Cart</Link></Nav>

                </Navbar>
            </div>
        )
    }
}

export default NavBar;