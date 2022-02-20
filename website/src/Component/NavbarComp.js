import react from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const NavbarComp = () => {

  return (
    <>
    <Navbar bg="dark" variant="dark" >
      <>
      <Navbar.Brand href="#home">Crypto</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </>
  </Navbar>
  </>
)

}
 


export default NavbarComp
