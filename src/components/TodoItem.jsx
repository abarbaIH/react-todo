import CrossIcon from "./icons/CrossIcon"

const TodoItem = ({ todo }) => {

    const { id, title, completed } = todo

    return (
        <article className="flex gap-4 py-4 border-b-gray-400 border-b">
            <button className="flex-none rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600 grow">{title}</p>
            <button className="flex-none">
                <CrossIcon />
            </button>
        </article>
    )
}

export default TodoItem