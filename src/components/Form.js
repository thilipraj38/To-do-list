import { useEffect } from "react";
import { v4 as uuidv4} from "uuid";

const Form = ({value,setValue,todos,setTodos,editTodo,setEditTodo}) => {
    
    function handleSubmit(e){
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id:uuidv4(),title : value, completed:false}])
            setValue('')
        }
        else{
            updateTodo(value,editTodo.id,editTodo.completed)
        }
        
    } 
    function updateTodo(title,id,completed){
        const newTodo = todos.map((todo)=>
            todo.id === id ? {title,id,completed}:todo
        )
        setTodos(newTodo)
        setEditTodo('')
    }
    useEffect(()=>{

        if(editTodo){
            setValue(editTodo.title)
        }
        else{
            setValue('')
        }
    },[setValue,editTodo])
    return ( 
        <div className="form">
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="What you want to do?" value={value} onChange={(e) => setValue(e.target.value)}/>
                <button type="submit">
                    {editTodo ? "Ok" : "Add"}
                </button>
            </form>
        </div>
     );
}
 
export default Form;