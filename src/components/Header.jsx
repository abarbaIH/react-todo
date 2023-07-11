import MoonIcon from "./icons/MoonIcon"

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">

            <div className="flex justify-between">
                <h1 className="text-3xl tracking-[0.4em] font-semibold uppercase text-white">Todo</h1>
                <button>
                    <MoonIcon fill="#fff" />
                </button>
            </div>

        </header>
    )
}

export default Header