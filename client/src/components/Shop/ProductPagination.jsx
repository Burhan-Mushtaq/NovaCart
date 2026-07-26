import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductPagination = ({
  page,
  totalPages,
  setPage,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex items-center justify-center gap-2">

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        transition
        hover:border-blue-500
        hover:text-blue-600
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              setPage(index + 1)
            }
            className={`
              h-11
              w-11
              rounded-xl
              font-semibold
              transition
              ${
                page === index + 1
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                  : "border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600"
              }
            `}
          >
            {index + 1}
          </button>
        )
      )}

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        transition
        hover:border-blue-500
        hover:text-blue-600
        disabled:cursor-not-allowed
        disabled:opacity-40
      "
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
};

export default ProductPagination;