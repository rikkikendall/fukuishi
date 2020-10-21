import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';

export default function SimpleModal() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}