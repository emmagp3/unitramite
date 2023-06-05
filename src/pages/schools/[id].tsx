import { GetStaticPaths, GetStaticProps } from 'next';
import School from '../../../api/stores/school.model';
import schoolStore from '../../../api/school.store';
import Layout from '../../../components/layout/layout';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

export default function SchoolPage({ schoolData }: { schoolData: School }) {
  const { id, name, address, description, paperWork } = schoolData;
  return (
    <Layout title={name}>
      <Container fluid>
        <Link href="/">Volver a Inicio</Link>
        <h1>{name}</h1>
        <p>{address}</p>
        <p>{description}</p>
        <ul>
          {paperWork.map((paperWork) => (
            <li key={paperWork.id}>
              <h2>{paperWork.name}</h2>
              <h3>Acerca de este trámite:</h3>
              <p>{paperWork.description}</p>
              <h3>Requisitos:</h3>
              <p>{paperWork.documentsRequired}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  schoolStore.initStore();
  const paths = schoolStore.getSchoolsPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  schoolStore.initStore();
  const schoolData = schoolStore.getSchoolData(params?.id as string);
  return {
    props: {
      schoolData,
    },
  };
};
