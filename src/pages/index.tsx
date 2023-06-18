import {
  Card,
  Carousel,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap';
import SchoolCard, {
  type SchoolCardProps,
} from '../../components/school_cards/school_card';
// import schoolStore from '../../api/school.store';
import { GetStaticProps } from 'next';
import Layout from '../../components/layout/layout';
import { getSchools } from '../../api/school.store';
import CustomButton from '../../components/button/button';
import useSearch from '@/hooks/useSearch';

export default function Home({ schools }: { schools: SchoolCardProps[] }) {
  const {
    filteredSchools,
    onChangeSearchValue,
    onClickSearchSchool,
    searchValue,
  } = useSearch(schools);

  return (
    <Layout title="Unitrámite">
      <Carousel controls={false}>
        <Carousel.Item>
          <img className="d-block w-100" src="banner.png" alt="First slide" />
          <Carousel.Caption>
            <h1>Toda la información de tus trámites</h1>
            <p>en solo lugar</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container fluid>
        <Row className="justify-content-center">
          <InputGroup
            className="mb-3"
            style={{
              width: '50%',
              margin: '10px',
            }}
          >
            <Form.Control
              placeholder="Buscar escuela"
              aria-label="Buscar escuela"
              value={searchValue}
              onChange={onChangeSearchValue}
            />
            <CustomButton
              type="primary"
              onClick={() => onClickSearchSchool(searchValue)}
            >
              Buscar
            </CustomButton>
          </InputGroup>
        </Row>
        <Row className="justify-content-center">
          {filteredSchools.map((school) => (
            <SchoolCard key={school.id} {...school} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const schools = await getSchools();
  console.log(schools);
  return {
    props: {
      schools,
    },
  };
};
