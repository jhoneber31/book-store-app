import { Link } from "react-router-dom"
import { InputSearch } from "../../components/book"

export const HomePage = () => {
  return (
    <section className="h-screen bg-yellow-100">
      <div className="container mx-auto px-4 py-10 h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl uppercase text-blue-100 font-bold text-center">Book Store App</h1>
        <p className="my-3 md:my-5 text-center text-md font-medium text-gray-200">Discover your next great read – Find books that inspire, entertain, and educate.</p>
        <div className="w-full lg:max-w-[60%]">
          <InputSearch/>
          <p className="text-center text-gray-200 mt-2 font-medium">
            or see all the books available{" "}
            <Link
              to="/books"
              className="text-blue-100 font-semibold"
            >
              here
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
