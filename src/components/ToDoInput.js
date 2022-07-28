import React from "react";
import { MdAddCircle } from "react-icons/md";
import styles from "./ToDoInput.module.css";

const ToDoInput = ({ onInputToggle }) => {
    return (
        <div className={styles['todoInput']}>
            <div className={styles['background']} onClick={onInputToggle}></div>
            <form className={styles['inputModal']}>
                <input type="text"></input>
                <button type="submit"><MdAddCircle /></button>
            </form>
        </div>
    )
}

export default ToDoInput;