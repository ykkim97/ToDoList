import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import styles from "./ToDoInput.module.css";
import { FaPen, FaTrash } from "react-icons/fa";

const ToDoInput = ({ 
    onInputToggle, 
    onAddToDo, 
    selectedToDo, 
    onDelete,
    onUpdate
}) => {

    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAddToDo(value);
        setValue("");
        onInputToggle();
    }

    useEffect(() => {
        if (selectedToDo) {
            setValue(selectedToDo.text);
        }
    }, [selectedToDo]);

    return (
        <div className={styles['todoInput']}>
            <div className={styles['background']} onClick={onInputToggle}></div>
            <form className={styles['inputModal']} onSubmit={selectedToDo ? () => {onUpdate(selectedToDo.id, value)} :  onSubmit}>
                <input 
                    type="text" 
                    placeholder="할 일을 입력해주세요!"
                    value={value}
                    onChange={onChange}
                ></input>
                {selectedToDo ? 
                    (<div className={styles['update']}>
                        <FaPen type="button" onClick={() => onUpdate(selectedToDo.id, value)}/>
                        <FaTrash type="button" onClick={() => onDelete(selectedToDo.id)}/>
                    </div>
                ) : (
                    <button type="submit">
                        <MdAddCircle />
                    </button>
                )}
            </form>
        </div>
    )
}

export default ToDoInput;