import React from "react";
import styles from "./ToDoItem.module.css";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const ToDoItem = ({ todo }) => {
    const { id, text, isChecked } = todo;
    return (
        <div className={styles['ToDoItem']}>
            <div className={isChecked ? styles['checked'] : styles[`content`]}>
                <div>
                    {isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                </div>
                <div className={styles['text']}>{text}</div>
            </div>
        </div>
    )
}

export default ToDoItem;