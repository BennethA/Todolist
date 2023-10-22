import { useEffect } from 'react';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
  
  const onFormSubmit = (event) => {  
    event.preventDefault();
    if(!editTodo) {
      setTodos([...todos, {id: newItem.id, title: input, completed: false} ])
      setInput('')
    } else if(editTodo) {
      // How did they get the id of editTodo? Cos editTodo has no id same as completed.
      updateTodo(input, editTodo.id, editTodo.completed)  
    }
  }
  
  function updateTodo(title, id, completed) {
    const newTodo = todos.map((todo) => 
    // What does the condition mean? hfhf
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
