import { Search, RotateCcw, Star } from "lucide-react";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Shoes",
  "Gaming",
  "Laptops",
  "Phones",
  "Accessories",
  "Home",
];

const brands = [
  "All",
  "Apple",
  "Samsung",
  "Nike",
  "Sony",
  "Dell",
  "HP",
  "ASUS",
  "Boat",
  "Logitech",
];

const ratings = [5, 4, 3, 2, 1];

const FilterSidebar = ({
  search,
  setSearch,

  selectedCategory,
  setSelectedCategory,

  selectedBrand,
  setSelectedBrand,

  maxPrice,
  setMaxPrice,

  selectedRating,
  setSelectedRating,
}) => {
  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedBrand("All");
    setMaxPrice(250000);
    setSelectedRating(0);
  };

  return (
    <aside className="sticky top-24 hidden h-fit rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:block">

      {/* Heading */}

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-black">
          Filters
        </h2>

        <button
          onClick={resetFilters}
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Reset
        </button>
      </div>

      {/* Search */}

      <div className="mb-8">

        <label className="mb-3 block text-sm font-semibold text-gray-700">
          Search
        </label>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search products..."
            className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              py-3
              pl-11
              pr-4
              outline-none
              transition
              focus:border-blue-600
              focus:bg-white
            "
          />

        </div>

      </div>

      {/* Categories */}

      <div className="mb-8">

        <h3 className="mb-4 text-lg font-bold">
          Categories
        </h3>

        <div className="space-y-3">

          {categories.map((category) => (

            <label
              key={category}
              className="flex cursor-pointer items-center gap-3"
            >

              <input
                type="radio"
                name="category"
                checked={
                  selectedCategory === category
                }
                onChange={() =>
                  setSelectedCategory(category)
                }
                className="accent-blue-600"
              />

              <span
                className={`text-sm ${
                  selectedCategory === category
                    ? "font-semibold text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {category}
              </span>

            </label>

          ))}

        </div>

      </div>

      {/* Price */}

      <div className="mb-8">

        <h3 className="mb-4 text-lg font-bold">
          Maximum Price
        </h3>

        <input
          type="range"
          min={0}
          max={250000}
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Number(e.target.value))
          }
          className="w-full accent-blue-600"
        />

        <div className="mt-3 flex justify-between text-sm text-gray-500">

          <span>$0</span>

          <span className="font-semibold text-blue-600">
            ${maxPrice.toLocaleString()}
          </span>

        </div>

      </div>

      {/* Brands */}

      <div className="mb-8">

        <h3 className="mb-4 text-lg font-bold">
          Brands
        </h3>

        <div className="space-y-3">

          {brands.map((brand) => (

            <label
              key={brand}
              className="flex cursor-pointer items-center gap-3"
            >

              <input
                type="radio"
                name="brand"
                checked={
                  selectedBrand === brand
                }
                onChange={() =>
                  setSelectedBrand(brand)
                }
                className="accent-blue-600"
              />

              <span
                className={`text-sm ${
                  selectedBrand === brand
                    ? "font-semibold text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {brand}
              </span>

            </label>

          ))}

        </div>

      </div>

      {/* Rating */}

      <div className="mb-8">

        <h3 className="mb-4 text-lg font-bold">
          Rating
        </h3>

        <div className="space-y-3">

          <label className="flex items-center gap-3">

            <input
              type="radio"
              name="rating"
              checked={selectedRating === 0}
              onChange={() =>
                setSelectedRating(0)
              }
              className="accent-blue-600"
            />

            <span className="text-sm">
              All Ratings
            </span>

          </label>

          {ratings.map((rating) => (

            <label
              key={rating}
              className="flex cursor-pointer items-center gap-3"
            >

              <input
                type="radio"
                name="rating"
                checked={
                  selectedRating === rating
                }
                onChange={() =>
                  setSelectedRating(rating)
                }
                className="accent-blue-600"
              />

              <div className="flex">

                {Array.from({ length: rating }).map(
                  (_, index) => (
                    <Star
                      key={index}
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  )
                )}

              </div>

              <span className="text-sm text-gray-500">
                & Up
              </span>

            </label>

          ))}

        </div>

      </div>

      {/* Reset */}

      <button
        onClick={resetFilters}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          py-3
          font-semibold
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        <RotateCcw size={18} />

        Reset Filters
      </button>

    </aside>
  );
};

export default FilterSidebar;