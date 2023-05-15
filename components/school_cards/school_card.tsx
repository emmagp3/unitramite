import { useRouter } from 'next/router';
import { Card, Button } from 'react-bootstrap';

export interface SchoolCardProps {
  id: string;
  name: string;
  description: string;
  src: string;
}

export default function SchoolCard({
  id,
  name,
  src,
  description,
}: SchoolCardProps) {
  const router = useRouter();
  return (
    <Card
      style={{
        width: 'auto',
        height: 'auto',
        margin: '10px',
      }}
    >
      <Card.Img
        variant="top"
        src={src}
        style={{ width: '100px', alignSelf: 'center', margin: '10px' }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>{name}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
      </Card.Body>
      <Button
        variant="primary"
        style={{ width: '90%', alignSelf: 'center', margin: '10px' }}
        onClick={() => router.push(`/schools/${id}`)}
      >
        Ver trámites
      </Button>
    </Card>
  );
}
