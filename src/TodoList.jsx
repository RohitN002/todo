import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  }

  return(
    <>
      <h1>TO do list</h1>
      <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Click</button>
    <ul>      {todos.map((todo,index)=>{
      <li key={index}>
<input type="checkbox" checked={todo.checked} onChange={(e)=>handleToggleTodo(index)}
      </li>
    })}  </ul>
    </>
  )
}
  export default TodoList