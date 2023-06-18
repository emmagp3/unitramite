import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import CustomButton from '../button/button';

export interface SchoolCardProps {
  id: string;
  name: string;
  logo: string;
}

export default function SchoolCard({ id, name, logo }: SchoolCardProps) {
  const router = useRouter();
  return (
    <Card
      style={{
        width: '30%',
        margin: '10px',
        padding: '10px',
        border: '2px solid #000000',
      }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>{name}</Card.Title>
      </Card.Body>
      <Card.Img
        variant="top"
        src={logo}
        style={{
          width: '40%',
          alignSelf: 'center',
          margin: '10px',
          aspectRatio: '1/1',
        }}
      />
      <CustomButton
        type="primary"
        onClick={() => router.push(`/schools/${id}`)}
      >
        Ver trámites
      </CustomButton>
    </Card>
  );
}
