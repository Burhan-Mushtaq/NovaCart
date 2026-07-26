import { AnimatePresence, motion } from "framer-motion";
import { X, Search, RotateCcw, Star } from "lucide-react";

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

const MobileFilters = ({
  open,
  onClose,

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
    <AnimatePresence>

      {open && (
        <>

          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: .30 }}
            className="fixed left-0 top-0 z-50 h-screen w-80 overflow-y-auto bg-white shadow-2xl"
          >

            {/* Header */}

            <div className="flex items-center justify-between border-b p-5">

              <h2 className="text-xl font-black">
                Filters
              </h2>

              <button
                onClick={onClose}
                className="rounded-xl border p-2"
              >
                <X />
              </button>

            </div>

            <div className="space-y-8 p-5">

              {/* Search */}

              <div>

                <h3 className="mb-3 font-bold">
                  Search
                </h3>

                <div className="relative">

                  <Search
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />

                  <input
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full rounded-xl border py-3 pl-10 pr-4"
                  />

                </div>

              </div>

              {/* Categories */}

              <div>

                <h3 className="mb-3 font-bold">
                  Categories
                </h3>

                <div className="space-y-2">

                  {categories.map(category=>(
                    <label
                      key={category}
                      className="flex items-center gap-3"
                    >

                      <input
                        type="radio"
                        checked={selectedCategory===category}
                        onChange={()=>setSelectedCategory(category)}
                      />

                      {category}

                    </label>
                  ))}

                </div>

              </div>

              {/* Brands */}

              <div>

                <h3 className="mb-3 font-bold">
                  Brands
                </h3>

                <div className="space-y-2">

                  {brands.map(brand=>(
                    <label
                      key={brand}
                      className="flex items-center gap-3"
                    >

                      <input
                        type="radio"
                        checked={selectedBrand===brand}
                        onChange={()=>setSelectedBrand(brand)}
                      />

                      {brand}

                    </label>
                  ))}

                </div>

              </div>

              {/* Price */}

              <div>

                <h3 className="mb-3 font-bold">
                  Price
                </h3>

                <input
                  type="range"
                  min={0}
                  max={250000}
                  value={maxPrice}
                  onChange={(e)=>setMaxPrice(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />

                <div className="mt-2 text-sm text-blue-600">
                  ${maxPrice.toLocaleString()}
                </div>

              </div>

              {/* Rating */}

              <div>

                <h3 className="mb-3 font-bold">
                  Rating
                </h3>

                {ratings.map(rating=>(
                  <label
                    key={rating}
                    className="mb-2 flex items-center gap-3"
                  >

                    <input
                      type="radio"
                      checked={selectedRating===rating}
                      onChange={()=>setSelectedRating(rating)}
                    />

                    <div className="flex">

                      {Array.from({length:rating}).map((_,i)=>(
                        <Star
                          key={i}
                          size={15}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}

                    </div>

                    & Up

                  </label>
                ))}

              </div>

              <button
                onClick={resetFilters}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white"
              >
                <RotateCcw size={18}/>
                Reset Filters
              </button>

            </div>

          </motion.aside>

        </>
      )}

    </AnimatePresence>
  );
};

export default MobileFilters;