import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import PurchaseForm from "./PurchaseForm";

const Purchase = ({onFormPost}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="primary" size="lg" onClick={handleShow} >
        Proceed to payment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PurchaseForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Purchase;
