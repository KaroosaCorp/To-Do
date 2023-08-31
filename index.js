function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn React',
      isCompleted: false,
    },
    {
      text: 'Buy flour, eggs, milk and honey',
      isCompleted: false,
    },
    {
      text: 'Bake bread',
      isCompleted: false,
    },
    {
      text: 'Mow the Lawn',
      isCompleted: false,
    },
    {
      text: 'Relax!!!',
      isCompleted: false,
    },
    {
      text: 'Watch The Witcher',
      isCompleted: false,
    }       
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
