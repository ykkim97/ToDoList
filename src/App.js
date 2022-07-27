import { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoTemplete from './components/ToDoTemplete';

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : "할일 1",
      isChecked : true
    },
    {
      id : 2,
      text : "할일 1",
      isChecked : false
    },
    {
      id : 3,
      text : "할일 1",
      isChecked : true
    },
  ]);


  return (
      <ToDoTemplete>
        <ToDoList todos={todos} />
      </ToDoTemplete>
  );
}

export default App;
