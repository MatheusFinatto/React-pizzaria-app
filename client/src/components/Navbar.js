import React from 'react'
import Logo from '../assets/pizzaLogo.png'
import '../styles/Navbar.css'
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (

        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">

            <div className='leftSide'>
                <Navbar.Brand href="/"><img src={Logo} alt="Pizza logo" /></Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <div className='rightSide'>
                    <Nav id='links'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/menu'>Menu</Nav.Link>
                        <Nav.Link href='/about'>Sobre</Nav.Link>
                        <Nav.Link href='/contact'>Contato</Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation;






// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//     <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">

//             </Nav>
//             <Nav>
//                 <Nav.Link href="#deets">More deets</Nav.Link>
//                 <Nav.Link eventKey={2} href="#memes">
//                     Dank memes
//                 </Nav.Link>
//             </Nav>
//         </Navbar.Collapse>
//     </Container>
// </Navbar>