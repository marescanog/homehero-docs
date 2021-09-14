import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


export default function AppNavbar(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/homehero-docs/">
                HomeHero Docs
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

