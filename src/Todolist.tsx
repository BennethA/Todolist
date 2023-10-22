const Todolist = ({todos, setTodos, setEditTodo}) => {
  function handleComplete({id}) {
    setTodos(
      //Why are we mapping through the todos to check if the condition is true? 
      //Are we mapping through it to check the list in which the handleComplete was clicked
      todos.map((item) => {
        if(item.id === id) {
          // Why do we map through the todos? Can't we just put the return statement into the setTodos for it to be represented in todos? And why is it in a curly bracket
          return {...item, completed: !item.completed}
        }
        return item;
      })
    )
  }

  function handleEdit({id}) {
    // Is the statement on line 16 checking if the id of element in which the edit todo button has been clicked on the same as the element in which the todo paragraph has been displayed? If yes, does it mean that the editTodo state will be set to true boolean? And the completed will be set to true as well?
    const findTodo = todos.find(todo => todo.id === id);
    setEditTodo(findTodo)
  }

  function handleDelete({id}) {
    // How does the filter work here. Is it the same as mapping through todos to check if the ids are equal?
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div>
      {
        // Why do we always put a parameter in the function of the map? Is it used to connect with the todos being mapped? Same question for handleComplete, handleEdit and handleDelete
        todos.map((todo) => ( 
          <li className="lists" key={todo.id}>
            <p className={`${todo.completed ? 'complete' : ''}`}>
              {todo.title}
            </p>
            <div>
              <button className="button-complete" onClick={() => handleComplete(todo)}>
                <i className="fa fa-check-circle"></i>
              </button>
              <button className="button-edit" onClick={() => handleEdit(todo)}>
                <i className="fa fa-edit"></i>
              </button>
              <button className="button-delete" onClick={()=> handleDelete(todo)}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))
      }
    </div>
  )
}

export default Todolist