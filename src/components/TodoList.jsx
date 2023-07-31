import TodoItem from "./TodoItem"

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className="mt-6 bg-white overflow-hidden dark:bg-gray-900 rounded-t-md [&>article]:p-4">
            {
                todos.map(todo => {
                    return (
                        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
                    )
                })
            }
        </div>
    )
}

export default TodoList