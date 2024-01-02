
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodosList from './components/TodosList';

function App() {
  const [value,setValue] = useState("")
  const [todos,setTodos] = useState([])
  const [editTodo,setEditTodo] = useState(null)
  return (
    <div className="App">
     <div className="tag">What's Your Plan Today?</div>
   
     <Form 
      value={value}
      setValue={setValue}
      todos = {todos}
      setTodos = {setTodos}
      editTodo = {editTodo}
      setEditTodo = {setEditTodo}

     />
     <TodosList
       todos = {todos}
       setTodos = {setTodos}
       setEditTodo = {setEditTodo}
     />
    </div>
  );
}

export default App;
