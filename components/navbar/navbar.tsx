import { Container, Navbar } from 'react-bootstrap';

export default function CustomNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand>Unitrámite</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
