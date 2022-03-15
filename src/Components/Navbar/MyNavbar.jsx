import React from 'react'
import {Navbar , Container , Nav} from 'react-bootstrap'
const MyNavbar = () => {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#ISLAIB">ISLAIB</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Accueil">Accueil</Nav.Link>
      <Nav.Link href="#Inscription">Inscription</Nav.Link>
      <Nav.Link href="#paiement">Paiement</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</div>
  )
}
export default MyNavbar