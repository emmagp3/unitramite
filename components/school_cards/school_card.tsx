import { Card, Button } from 'react-bootstrap';

interface SchoolCardProps {
  name: string;
  src: string;
}

export default function SchoolCard({ name, src }: SchoolCardProps) {
  return (
    <Card style={{ width: 'auto', margin: '10px' }}>
      {/* <Card.Img variant="top" src={src} /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {/* {shortDescription && <Card.Text>{shortDescription}</Card.Text>} */}
      </Card.Body>
      <Button
        variant="primary"
        style={{ width: '90%', alignSelf: 'center', margin: '10px' }}
      >
        Go somewhere
      </Button>
    </Card>
  );
}
