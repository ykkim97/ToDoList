import React from "react";
import styles from "./ToDoTemplete.module.css";

const ToDoTemplete = ({children}) => {
    return (
        <>
            <header className={styles['templete']}>
                <div className={styles['title']}>오늘 할 일</div>
                <div className={styles['info']}>0 개의 할 일이 있습니다.</div>
                <div className={styles['children']}>{children}</div>
            </header>
        </>
    )
}

export default ToDoTemplete;