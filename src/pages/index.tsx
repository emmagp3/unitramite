import { Container } from 'react-bootstrap';
import SchoolCard, {
  type SchoolCardProps,
} from '../../components/school_cards/school_card';
import schoolStore from '../../api/school.store';
import { GetStaticProps } from 'next';
import Layout from '../../components/layout/layout';

export default function Home({ schools }: { schools: SchoolCardProps[] }) {
  return (
    <Layout title="Unitrámite">
      <Container fluid>
        {schools.map((school) => (
          <SchoolCard key={school.id} {...school} />
        ))}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  schoolStore.initStore();
  const schools = schoolStore.getSchoolsCardProps();
  return {
    props: {
      schools,
    },
  };
};
