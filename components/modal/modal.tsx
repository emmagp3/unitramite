import { Modal } from 'react-bootstrap';
import Procedure from '../../api/stores/procedure.model';
import { MouseEventHandler } from 'react';
import CustomButton from '../button/button';
import Link from 'next/link';

interface ProcedureModalProps {
  procedure?: Procedure;
  show: boolean;
  onHide: MouseEventHandler<HTMLButtonElement>;
}

export default function ProcedureModal({
  procedure,
  show,
  onHide,
}: ProcedureModalProps) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {procedure?.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Descripción</h4>
        <p>{procedure?.description}</p>

        <h4>Requisitos:</h4>
        <p>{procedure?.documentsRequired}</p>

        <h4>Adjuntos:</h4>
        {procedure?.attachments.map((attachment) => (
          <li key={attachment}>
            <Link href={attachment}>{attachment}</Link>
          </li>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <CustomButton type="primary" onClick={onHide}>
          Close
        </CustomButton>
      </Modal.Footer>
    </Modal>
  );
}
