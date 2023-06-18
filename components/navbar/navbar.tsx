import Link from 'next/link';
import { Container, Navbar } from 'react-bootstrap';
import CustomButton from '../button/button';

export default function CustomNavBar() {
  return (
    <Navbar variant="dark" style={{ backgroundColor: '#A7727D' }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand>
          <Link
            href="/"
            style={{
              color: '#FFFFFF',
              textDecoration: 'none',
            }}
          >
            Unitrámite
          </Link>
        </Navbar.Brand>
        <CustomButton type="secondary">Iniciar Sesión</CustomButton>
      </Container>
    </Navbar>
  );
}
