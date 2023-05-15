import { GetStaticPaths, GetStaticProps } from 'next';
import School from '../../../api/stores/school.model';
import schoolStore from '../../../api/school.store';

export default function SchoolPage({ schoolData }: { schoolData: School }) {
  return (
    <>
      <h1>{schoolData.name}</h1>
      <p>{schoolData.description}</p>
      <ul>
        {schoolData.paperWork.map((paperWork) => (
          <li key={paperWork.id}>{paperWork.name}</li>
        ))}
      </ul>
    </>
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
