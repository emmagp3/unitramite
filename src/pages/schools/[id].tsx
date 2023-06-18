import { GetStaticPaths, GetStaticProps } from 'next';
import School from '../../../api/stores/school.model';
import { getSchoolData, getSchoolsPaths } from '../../../api/school.store';
import Layout from '../../../components/layout/layout';
import styles from './school.module.css';
import { Alert, Container, Modal, Stack } from 'react-bootstrap';
import CustomButton from '../../../components/button/button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ProcedureModal from '../../../components/modal/modal';
import Procedure from '../../../api/stores/procedure.model';

export default function SchoolPage({ schoolData }: { schoolData: School }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [currentProcedure, setCurrentProcedure] = useState<Procedure>();
  const { logo, name, address, procedures } = schoolData;

  const onClickViewProcedureDetails = (procedure: Procedure) => {
    setShowModal(true);
    setCurrentProcedure(procedure);
  };

  return (
    <Layout title={name}>
      <Container fluid>
        <Alert variant="light" className={styles.borderBlack}>
          <img src={logo} />
          <h1>{name}</h1>
          <p>
            <strong>Ubicación:</strong> {address}
          </p>
        </Alert>
        <section className={styles.ul}>
          {procedures.map((procedure) => (
            <Stack
              key={procedure.id}
              className={styles.li}
              direction="horizontal"
              gap={2}
            >
              <div className="p-2">
                <p className="h6">{procedure.name}</p>
              </div>
              <div className="p-2 ms-auto">
                <CustomButton
                  type="primary"
                  onClick={() => onClickViewProcedureDetails(procedure)}
                >
                  Más información
                </CustomButton>
              </div>
            </Stack>
          ))}
        </section>
        <ProcedureModal
          procedure={currentProcedure}
          show={showModal}
          onHide={() => setShowModal(false)}
        />
        <CustomButton
          className={styles.button}
          type="primary"
          onClick={() => router.push('/')}
        >
          Volver
        </CustomButton>
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSchoolsPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const schoolData = await getSchoolData(params?.id as string);
  return {
    props: {
      schoolData,
    },
  };
};
