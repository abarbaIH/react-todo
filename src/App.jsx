import { useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

const initialStateTodos = [
  { id: 1, title: "Go to the GYM", completed: true },
  { id: 2, title: "Complete online JavaScript Course", completed: false },
  { id: 3, title: "10 minutes meditation ", completed: false },
  { id: 4, title: "Pick up groceries", completed: false },
  { id: 5, title: "Complete todo app on Frontend Mentor", completed: false }
]

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos)

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const [filter, setFilter] = useState("all")

  const changeSetFilter = (filter) => setFilter(filter)

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos
      case "active":
        return todos.filter((todo) => !todo.completed)
      case "completed":
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">

      <Header />

      <main className="container mx-auto px-4 mt-8">

        <TodoCreate createTodo={createTodo} />

        <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />

        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />

        <TodoFilter changeSetFilter={changeSetFilter} filter={filter} />

      </main>

      <footer className="text-center mt-8">Drag and drop to reorder list </footer>

    </div>
  )
}

export default App