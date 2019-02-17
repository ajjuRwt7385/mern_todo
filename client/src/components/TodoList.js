import React from "react";
import { connect } from "react-redux";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { getTodos, deleteTodo } from "../actions/todoActions";
import PropTypes from "prop-types";
import AddTodoModel from './AddTodoModal';

class TodoItem extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <div>
        <AddTodoModel />
        <ListGroup>
          {this.props.todos.map(todo => (
            <ListGroupItem key={todo._id}>
              {todo.title}
              <Button onClick={() => this.props.deleteTodo(todo._id)}>
                &times;
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};
const mapDispatchToProp = {
  getTodos,
  deleteTodo
};
export default connect(
  mapStateToProps,
  mapDispatchToProp
)(TodoItem);
