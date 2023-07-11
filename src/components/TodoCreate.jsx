const TodoCreate = () => {
    return (
        <form className=" flex gap-4 items-center bg-white rounded-md overflow-hidden py-4 px-4">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input className="w-full text-gray-400 outline-none" type="text" placeholder="Create a new ToDo" />
        </form>
    )
}

export default TodoCreate