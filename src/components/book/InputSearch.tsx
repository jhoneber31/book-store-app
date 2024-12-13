import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const InputSearch = () => {

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search"); 

  const navigate = useNavigate();

  const formattedSearchQuery = searchQuery
  ? searchQuery.replace(/-/g, " ") 
  : "";

  const [value, setValue] = useState<string>(formattedSearchQuery);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedValue = value
      .trim() 
      .toLowerCase()
      .replace(/\s+/g, "-");

    if (normalizedValue) {
      navigate(`/books?search=${encodeURIComponent(normalizedValue)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex" > 
      <input 
        type="text" 
        placeholder="Search book"
        className="border border-black rounded-lg p-2 w-full"
        name="search"
        value={value}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-blue-100 text-white px-4 py-2 rounded-lg ml-2"
      >
        Search
      </button>
    </form>
  )
}
