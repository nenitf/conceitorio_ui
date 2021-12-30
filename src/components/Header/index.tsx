import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Conceitório</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/consulta/create">Agendar consulta</Nav.Link>
            <NavDropdown title="Cadastros">
              <NavDropdown.Item as={Link} to="/medico/create">Médicos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
