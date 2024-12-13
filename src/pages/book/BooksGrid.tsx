import { useSearchParams } from "react-router-dom";
import { BookCard, BookNotFound, Navbar } from "../../components";
import { mockBooks } from "../../api/mockData";

export const BooksGrid = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const formattedSearchQuery = searchQuery
    ? searchQuery.replace(/-/g, " ")
    : "";

  const data = mockBooks.filter((book) =>
    book.title.toLowerCase().includes(formattedSearchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        {data.length === 0 ? (
          <BookNotFound />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {data.map((book) => (
              <BookCard book={book} key={book.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
