import { useState } from "react";
import "./App.css"
import Header from "./Header";
import Form from "./Form";
import Todolist from "./Todolist";

function App() {
  let initialState = JSON.parse(localStorage.getItem('todos'))
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

  localStorage.setItem('todos', JSON.stringify(todos));
  return (
    <>
      <Header/>
      <Form 
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      editTodo={editTodo}
      setEditTodo={setEditTodo}/>
      <Todolist 
      todos={todos} 
      setTodos={setTodos}
      setEditTodo={setEditTodo}/>
    </>
  )
}

export default App;