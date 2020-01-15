import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal, Accordion, Icon } from "semantic-ui-react";
import { getProductsByFilterQuery } from "../../actions/products";
import MenuItem from "./MenuItem";
const ModalFilter = props => {
  const { filterQuery, onGetProductsByFilter } = props;
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };
  const ok = () => {
    setOpen(false);
    onGetProductsByFilter(filterQuery);
  };
  return (
    <Modal
      trigger={<Icon link name="filter" onClick={show} />}
      centered={false}
      open={open}
    >
      <Modal.Header>Filter products</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
          <Accordion>
            <MenuItem />
          </Accordion>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={close}>
          No
        </Button>
        <Button
          positive
          onClick={ok}
          labelPosition="right"
          icon="checkmark"
          content="Yes"
        />
      </Modal.Actions>
    </Modal>
  );
};
const mapStateToProps = state => ({
  filterQuery: state.changeFilterQuery.query,
});
const mapDispatchToProps = dispatch => ({
  onGetProductsByFilter: query => {
    dispatch(getProductsByFilterQuery(query));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalFilter);
