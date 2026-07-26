import { Search } from "lucide-react";

const ShopHero = ({ total }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">

        <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-100 backdrop-blur">
          Premium Collection
        </span>

        <h1 className="mt-6 text-5xl font-black text-white md:text-6xl">
          Discover Amazing Products
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Browse thousands of premium products with
          modern design, best prices and lightning-fast
          delivery.
        </p>

        <div className="relative mt-10 w-full max-w-xl">

          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            placeholder="Search products..."
            className="h-14 w-full rounded-full bg-white pl-14 pr-5 shadow-xl outline-none ring-4 ring-white/10 transition focus:ring-blue-400"
          />

        </div>

        <div className="mt-8 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
          {total} Products Available
        </div>

      </div>

    </section>
  );
};

export default ShopHero;