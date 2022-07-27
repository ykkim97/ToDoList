import React from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoList.module.css";

const ToDoList = ({ todos }) => {
    return (
        <div className={styles['todolist']}>
            {todos.map(todo => (
                <ToDoItem todo={todo} key={todo.id} />
            ))}
        </div>
    )
}

export default ToDoList;