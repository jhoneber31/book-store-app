import { SadIcon } from "../../icons"

export const BookNotFound = () => {
  return (
    <div className="flex flex-col justify-center gap-y-5 items-center h-[calc(100vh-260px)]">
      <SadIcon/>
      <h4 className="text-blue-100 text-4xl text-center font-semibold">No book found. Please try searching with a different keyword.</h4>
    </div>
  )
}
