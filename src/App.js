import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import ToDoInput from './components/ToDoInput';
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
  const [inputToggle, setInputToggle] = useState(false);

  const onInputToggle = () => {
    setInputToggle(prev => !prev);
  }

  return (
      <ToDoTemplete>
        <ToDoList todos={todos} />
        <div className='add-todo'>
          <MdAddCircle onClick={onInputToggle}/>
        </div>
        {inputToggle ? <ToDoInput onInputToggle={onInputToggle} /> : ""}
      </ToDoTemplete>
  );
}

export default App;
