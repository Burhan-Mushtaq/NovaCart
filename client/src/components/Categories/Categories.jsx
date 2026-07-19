import CategoryCard from "./CategoryCard";

import {
  Footprints,
  Shirt,
  Watch,
  Backpack,
} from "lucide-react";

const categories = [
  {
    title: "Sneakers",
    products: "120 Products",
    icon: Footprints,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Apparel",
    products: "85 Products",
    icon: Shirt,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Watches",
    products: "65 Products",
    icon: Watch,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Accessories",
    products: "40 Products",
    icon: Backpack,
    color: "from-emerald-500 to-green-600",
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Categories
          </p>

          <h2 className="mt-3 text-4xl font-black text-gray-900">
            Shop By Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Explore our carefully selected collections designed
            for style, comfort and performance.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;