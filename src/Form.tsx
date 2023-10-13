import { useEffect } from 'react';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    // editTodo is set to null initially in App component, and in Todolist component, we are giving it a boolean value. So if editTodo has been set to true, does it means on line 8, if it's not true the statement should run and if its true the else statement should run? 
    if(!editTodo) {
      // Can you explain the statement in the curly bracket
      setTodos([...todos, {id: newItem.id, title: input, completed: false} ])
      setInput('')
    } else {
      // How did they get the id of editTodo? Cos editTodo has no id same as completed.
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }
  
  function updateTodo(titles, id, completed) {
    const newTodo = todos.map((todo) => 
    // What does the condition mean? 
      todo.id === id ? {title, id, completed} : todo
    )
    setTodos(newTodo);
    setEditTodo('')
  }
  // It runs everytime the component rerenders or the page refreshes, mostly used to fetch data. But what does it do in this situation
  useEffect(() => {
    if(editTodo) {
      setInput(editTodo.title)
    } else {
      setInput('')
    }
  }, [setInput, editTodo] )

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const newItem = {
    id: Math.random()
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input 
        type="text" 
        className="input"
        value={input}
        onChange={onInputChange}/>
        <button className="add-btn">
          <p className="add-btn2">
            {editTodo ? 'OK' : 'Add Todo'}
          </p>
        </button>
      </form>
    </div>
  )
}

export default Form