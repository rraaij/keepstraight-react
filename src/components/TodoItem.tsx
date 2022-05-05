import React from "react";
import classes from "./TodoItem.module.css";
import Todo from "../models/todo";

const TodoItem: React.FC<{
  todo: Todo;
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.todo.text}
    </li>
  );
};
export default TodoItem;
