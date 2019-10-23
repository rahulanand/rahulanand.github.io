import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../styles/Header.css'

function Header() {
    return (
        <div className="container">
            <Navbar expand="xl" sticky="top" className="navbar">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    )
}


export default Header;