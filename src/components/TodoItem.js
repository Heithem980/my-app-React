import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleted.bind(this, this.props.todo.id)}
          />{" "}
          {this.props.todo.title}{" "}
          <button
            onClick={this.props.delTodo.bind(this, this.props.todo.id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
const btnStyle = {
  float: "right",
  background: "red",
  color: "white",
  padding: "5px, 10px",
  border: "none",
  cursor: "pointer",
};
export default TodoItem;
