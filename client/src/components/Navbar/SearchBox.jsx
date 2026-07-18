import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="relative hidden xl:block">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
  type="text"
  placeholder="Search premium products..."
  className="
    w-72
    xl:w-80
    rounded-full
    border
    border-gray-200
    bg-white/70
    py-3
    pl-12
    pr-4
    text-sm
    shadow-sm
    backdrop-blur
    transition-all
    duration-300
    focus:w-96
    focus:border-blue-600
    focus:ring-4
    focus:ring-blue-100
  "
/>
    </div>
  );
};

export default SearchBox;