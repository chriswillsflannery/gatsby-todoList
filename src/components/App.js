import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.setState(prevState => {
      const newTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: newTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleClick={this.handleClick}/>)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App
