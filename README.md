# 📚 Book Store App

**Book Store App** is a web application designed to help users explore, search, and discover books effortlessly. It features a clean and minimalist interface focused on enhancing the user experience.

## 🚀 Features

- **Search books:** Quickly find books using a search bar.
- **Book list:** Display filtered books based on the search query.
- **Book details:** Explore detailed information about a book, including author, category, description, and discounted price.
- **Image carousel:** View book images in an interactive swiper.
- **Add to cart:** Select the desired quantity and add books to your cart.

---

## 🛠️ Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [React Router DOM](https://reactrouter.com/)
  - [Swiper.js](https://swiperjs.com/)

- **Development:**
  - Built with Vite for a fast development experience.
  - Mock data as the primary data source for the book catalog.

---

## 📂 Project Structure

```plaintext
src/
├── api/                     # Mock data 
├── components/              # Reusable components (Navbar, InputSearch, etc.)
├── icons/                   # Icon components for UI
├── pages/                   # Main pages (HomePage, BooksGrid, BookDetail)
├── routes/                  # App routing configuration
├── types/                   # TypeScript types and interfaces (Book.ts)
├── utils/                   # Reusable utility functions (calculateDiscountedPrice, etc.)
├── styles/                  # Global and custom styles
├── App.tsx                  # Application's entry point
└── main.tsx                 # Main configuration and rendering
