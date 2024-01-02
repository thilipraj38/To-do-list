import React,{useState} from 'react';

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'uncompleted') {
      return !todo.completed;
    }
    return true; // 'all' filter, return all todos
  });
  function handleDelete({ id }) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleComplete(todo) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleEdit({ id }) {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  
  return (
    <div className="todos">
      {todos.map((todo) => (
        <li className={`list ${todo.completed ? 'complete' : ''}`} key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ''}`}
            onChange={(event) => event.preventDefault()}
          />

          <button   
          className={todo.completed ? 'complete-button-green' : 'complete-button-red'}
          onClick={() => handleComplete(todo)}>
            <i className="fa fa-check-circle"></i>
          </button>
          <button className="" onClick={() => handleEdit(todo)}>
            <i className="fa fa-edit"></i>
          </button>
          <button className="complete" onClick={() => handleDelete(todo)}>
            <i className="fa fa-trash"></i>
          </button>
        </li>
      ))}
      {/* filter option show only task is added*/}
      {todos.length > 0 && (
        <div>
          <button className="button-type" onClick={() => setFilter('all')}>All</button>
          <button className="button-type" onClick={() => setFilter('completed')}>Completed</button>
          <button className="button-type" onClick={() => setFilter('uncompleted')}>Uncompleted</button>
        </div>
      )}
      {/* enable while clickig above button */}
      {filteredTodos.map((todo) => (
        <li className={`list ${todo.completed ? 'complete' : ''}`} key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ''}`}
            onChange={(event) => event.preventDefault()}
          />

          <button  
           className={todo.completed ? 'complete-button-green' : 'complete-button-red'}
           onClick={() => handleComplete(todo)}>
            <i className="fa fa-check-circle"></i>
          </button>
          <button className="" onClick={() => handleEdit(todo)}>
            <i className="fa fa-edit"></i>
          </button>
          <button className="" onClick={() => handleDelete(todo)}>
            <i className="fa fa-trash"></i>
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
