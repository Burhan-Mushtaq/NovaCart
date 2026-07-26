import { useMemo, useState } from "react";

import products from "../data/products";

import ShopHero from "../components/Shop/ShopHero";
import FilterSidebar from "../components/Shop/FilterSidebar";
import MobileFilters from "../components/Shop/MobileFilters";
import ProductToolbar from "../components/Shop/ProductToolbar";
import ProductPagination from "../components/Shop/ProductPagination";
import ProductCard from "../components/product/ProductCard";

const PRODUCTS_PER_PAGE = 8;

const Shop = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState(250000);
  const [selectedRating, setSelectedRating] = useState(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let data = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : product.category === selectedCategory;

      const matchesBrand =
        selectedBrand === "All"
          ? true
          : product.brand === selectedBrand;

      const matchesPrice =
        product.price <= maxPrice;

      const matchesRating =
        product.rating >= selectedRating;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesRating
      );
    });

    switch (sortBy) {
      case "low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "high":
        data.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        data.sort((a, b) => b.rating - a.rating);
        break;

      case "newest":
        data.sort((a, b) => b.id - a.id);
        break;

      default:
        break;
    }

    return data;
  }, [
    search,
    selectedCategory,
    selectedBrand,
    maxPrice,
    selectedRating,
    sortBy,
  ]);

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;

  const displayedProducts =
    filteredProducts.slice(
      startIndex,
      startIndex + PRODUCTS_PER_PAGE
    );

  return (
    <main className="bg-[#fafafa] min-h-screen">

      <ShopHero total={filteredProducts.length} />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[280px_1fr]">

        <FilterSidebar
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />

        <section>
          <MobileFilters
            open={mobileFiltersOpen}
            onClose={() => setMobileFiltersOpen(false)}

            search={search}
            setSearch={setSearch}

            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}

            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}

            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}

            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />

          <ProductToolbar
            total={filteredProducts.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
            openFilters={() => setMobileFiltersOpen(true)}
          />

          {displayedProducts.length === 0 ? (

            <div className="mt-12 rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center">

              <h2 className="text-3xl font-bold">
                No Products Found
              </h2>

              <p className="mt-3 text-gray-500">
                Try changing your search or filters.
              </p>

            </div>

          ) : (

            <div className="mt-8 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">

              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          )}

          <ProductPagination
            page={currentPage}
            totalPages={totalPages}
            setPage={setCurrentPage}
          />

        </section>

      </div>

    </main>
  );
};

export default Shop;