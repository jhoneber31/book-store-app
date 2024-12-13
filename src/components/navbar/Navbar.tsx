import { Link } from "react-router-dom"
import { InputSearch } from "../book"

export const Navbar = () => {
  return (
    <nav className="bg-yellow-100 sticky top-0 z-10 left-0 w-full">
      <div className="mx-auto container p-4 flex flex-col gap-y-4 md:flex-row justify-between lg:items-center">
        <Link to="/" className="text-3xl font-semibold text-blue-100">BOOK STORE APP</Link>
        <InputSearch/>
      </div>
    </nav>
  )
}
