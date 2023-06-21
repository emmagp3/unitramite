import { Container, Form } from 'react-bootstrap';
import Layout from '../../../components/layout/layout';
import useForm from '@/hooks/useForm';
import styles from './Login.module.css';
import CustomButton from '../../../components/button/button';
import { FormEvent, use, useContext } from 'react';
import { loginWithEmail } from '../../../api/school.store';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const { onChangeFields, formState, error } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formState;

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const userData = await loginWithEmail(email, password);
    if (!userData) return;
    alert(`Bienvenido ${userData?.name} ${userData.lastName}`);
    router.push('/');
  };

  return (
    <Layout title="Iniciar sesión">
      <Container fluid className={styles.container}>
        <Form className={styles.form} onSubmit={onSubmit}>
          <h1 className={styles.h1}>Inicia Sesión</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="tu@correo.com"
              onChange={onChangeFields}
              value={email}
              name="email"
              autoComplete="false"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={onChangeFields}
              value={password}
              name="password"
              autoComplete="false"
            />
          </Form.Group>
          <CustomButton type="primary" input>
            Iniciar Sesión
          </CustomButton>
        </Form>
      </Container>
    </Layout>
  );
}
