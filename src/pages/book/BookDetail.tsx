import { useParams } from "react-router-dom";
import { BookNotFound, Navbar } from "../../components";
import { mockBooks } from "../../api/mockData";
import { Swiper, SwiperSlide} from "swiper/react";
import { calculateDiscountedPrice } from "../../utils";
import { Navigation, Pagination } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

export const BookDetail = () => {
  const { id } = useParams<{ id: string }>();

  const book = id ? mockBooks.find((book) => book.id === +id) : null;

  const discountedPrice = book
    ? calculateDiscountedPrice(book.price, book.discountPercentage)
    : 0;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        {book ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="col-span-1">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {book.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt={book.title} className="w-full" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-span-1">
              <h3 className="text-4xl uppercase font-semibold">{book.title}</h3>
              <p className="text-gray-100 text-lg mt-4 w-[80%] pb-2 border-b border-gray-100 font-medium">
                {book.author}
              </p>
              <div className="my-4 pb-4 border-b w-[80%] border-gray-100">
                <p className="text-blue-100 text-xl font-medium">
                  More information
                </p>
                <div className="flex gap-x-2 mt-2">
                  <h4 className="text-detail">Category:</h4>
                  <span className="text-info">{book.category}</span>
                </div>
                <div className="flex flex-col mt-2">
                  <h4 className="text-detail">Description:</h4>
                  <p className="text-info">{book.description}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-x-2 items-end">
                  <span className="text-detail">Before</span>
                  <p className="text-xl text-black">
                    $ <span className="line-through">{book.price}</span>
                  </p>
                </div>
                <div className="flex gap-x-2 items-end">
                  <span className="text-detail">After</span>
                  <p className="text-xl text-blue-100 font-semibold">
                    $ <span className="text-4xl">{discountedPrice}</span>
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-x-2">
                  <button
                    className="bg-yellow-100 text-blue-100 px-9 h-[47px] rounded-lg text-base font-bold"
                    type="button"
                  >
                    ADD TO CART
                  </button>
                  <input 
                    type="number" 
                    name="quantity"
                    defaultValue={1}
                    className="w-[62px] h-[47px] text-gray-200 bg-transparent text-center text-xl border border-[#adadad] rounded-lg px-2"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <BookNotFound/>
        )}
      </div>
    </>
  );
};
