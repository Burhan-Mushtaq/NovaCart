import ProductCard from "../Product/ProductCard";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 8999,
    oldPrice: 10999,
    rating: 4.9,
    image: "/products/shoe1.png",
    badge: "New",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 9999,
    oldPrice: 11999,
    rating: 4.8,
    image: "/products/shoe2.png",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 7499,
    oldPrice: 8999,
    rating: 4.7,
    image: "/products/shoe3.png",
    badge: "Sale",
  },
  {
    id: 4,
    name: "New Balance 550",
    price: 9499,
    oldPrice: 11999,
    rating: 4.9,
    image: "/products/shoe4.png",
    badge: "Trending",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Featured
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Featured Products
          </h2>

          <p className="mt-4 text-gray-500">
            Discover our best-selling premium footwear.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;