import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const ModalFilter = () => (
  <Modal trigger={<Button>Show Modal</Button>} centered={false}>
    <Modal.Header>FIlter products</Modal.Header>
    <Modal.Content>
      <Modal.Description></Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalFilter;
