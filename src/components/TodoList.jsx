import TodoItem from "./TodoItem"

const TodoList = ({ todos }) => {
    return (
        <div className="mt-8 bg-white rounded-t-md [&>article]:p-4">
            {
                todos.map(todo => {
                    return (
                        <TodoItem key={todo.id} todo={todo} />
                    )
                })
            }
        </div>
    )
}

export default TodoList