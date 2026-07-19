import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div
      className="
        hidden
        xl:flex
        items-center
        w-[360px]
        h-12
        px-5
        rounded-full
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-gray-300
        hover:shadow-md
        focus-within:border-blue-600
        focus-within:ring-4
        focus-within:ring-blue-100
        focus-within:shadow-lg
      "
    >
      <Search
        size={18}
        className="text-gray-400 flex-shrink-0"
      />

      <input
        type="text"
        placeholder="Search products..."
        className="
          ml-3
          flex-1
          bg-transparent
          text-sm
          text-gray-700
          placeholder:text-gray-400
          outline-none
        "
      />

    </div>
  );
};

export default SearchBox;