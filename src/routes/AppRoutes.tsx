import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { BookDetail, BooksGrid } from "../pages/book"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<BooksGrid />} />
      <Route path="/books/:id" element={<BookDetail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
