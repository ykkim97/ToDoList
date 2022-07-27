import React from "react";
import styles from "./ToDoItem.module.css";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const ToDoItem = ({ todo }) => {
    const { id, text, isChecked } = todo;
    return (
        <div className={styles['ToDoItem']}>
            <div className={styles[`content ${isChecked ? "checked" : ""}`]}>
                {isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div>{text}</div>
            </div>
        </div>
    )
}

export default ToDoItem;