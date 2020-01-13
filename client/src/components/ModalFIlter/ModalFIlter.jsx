import React, { useState } from "react";
import { Button, Modal, Accordion, Icon } from "semantic-ui-react";
import MenuItem from "./MenuItem";
const ModalFilter = () => {
  return (
    <Modal trigger={<Icon link name="filter" />} centered={false}>
      <Modal.Header>Filter products</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
          <Accordion>
            <MenuItem />
          </Accordion>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button negative>No</Button>
        <Button positive labelPosition="right" icon="checkmark" content="Yes" />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalFilter;
