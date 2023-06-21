import Link from 'next/link';
import { Container, Navbar } from 'react-bootstrap';
import styles from './navbar.module.css';
import { useContext } from 'react';

export default function CustomNavBar() {
  return (
    <Navbar variant="dark" style={{ backgroundColor: '#A7727D' }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand>
          <Link href="/" className={styles.link}>
            Unitrámite
          </Link>
        </Navbar.Brand>
        <Link href="/login" className={styles.link}>
          Iniciar sesión
        </Link>
      </Container>
    </Navbar>
  );
}
