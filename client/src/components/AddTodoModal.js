import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";
import PropTypes from 'prop-types';

class AddTodoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newTodo = {
      title: this.state.name
    };
    this.props.addTodo(newTodo);
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Add Todo
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Todo Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="todo">Title:</Label>
                <Input
                  type="text"
                  name="name"
                  id="todo"
                  placeholder="Your todo title"
                  onChange={this.onInputChange}
                />
              </FormGroup>
              <Button color="primary" block>Click To Add Todo</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

AddTodoModal.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo
});
const mapDispatchToProps = {
  addTodo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoModal);
