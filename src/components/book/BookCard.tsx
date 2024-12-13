import { useNavigate } from "react-router-dom";
import { IBook } from "../../interfaces";
import { calculateDiscountedPrice } from "../../utils";

interface Props {
  book: IBook;
}

export const BookCard = ({book}:Props) => {

  const navigate = useNavigate();

  const discountedPrice = calculateDiscountedPrice(book.price, book.discountPercentage);

  const handleNavigate = () => {
    navigate(`/books/${book.id}`);
  }

  return (
    <div 
      className="flex flex-col border border-black rounded-lg overflow-hidden cursor-pointer"
      onClick={handleNavigate}
    >
      <img src={book.thumbnail} alt="thumbnail-image" />
      <div className="p-4 w-fit">
        <h3 className="text-[#2E2E2E] text-3xl">{book.title}</h3>
        <p className="text-gray-100 font-semibold text-sm">{book.author}</p>
        <p className="text-sm mt-3">$ <span className="line-through">{book.price}</span></p>
        <p className="text-2xl font-semibold text-blue-100">$ {discountedPrice}</p>
      </div>
    </div>
  )
}
