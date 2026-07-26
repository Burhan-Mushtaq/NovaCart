import {
  SlidersHorizontal,
  ArrowUpDown,
  LayoutGrid,
} from "lucide-react";

const ProductToolbar = ({
  total,
  sortBy,
  setSortBy,
}) => {
  return (
    <div
      className="
      flex
      flex-col
      gap-4
      rounded-3xl
      border
      border-gray-200
      bg-white
      p-5
      shadow-sm
      md:flex-row
      md:items-center
      md:justify-between
    "
    >
      {/* Left */}

      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <LayoutGrid size={20} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Products
          </h3>

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {total}
            </span>{" "}
            products
          </p>
        </div>
      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-3">

        {/* Mobile Filters */}

        <button
          className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-3
          font-medium
          shadow-sm
          transition
          hover:border-blue-500
          hover:text-blue-600
          lg:hidden
        "
        >
          <SlidersHorizontal size={18} />

          Filters
        </button>

        {/* Sort */}

        <div className="relative">

          <ArrowUpDown
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="
            appearance-none
            rounded-xl
            border
            border-gray-200
            bg-white
            py-3
            pl-11
            pr-10
            text-sm
            font-medium
            outline-none
            transition
            hover:border-blue-500
            focus:border-blue-600
          "
          >
            <option value="featured">
              Featured
            </option>

            <option value="newest">
              Newest
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>

            <option value="rating">
              Highest Rated
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductToolbar;