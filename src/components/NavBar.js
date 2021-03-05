import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function NavBar() {
    return (
        
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">My IP</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Donate</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>

    )
}


export default NavBar

