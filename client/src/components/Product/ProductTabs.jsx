import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    date: "2 days ago",
    review:
      "Amazing quality. The comfort is unbelievable and the delivery was very fast.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    rating: 4,
    date: "1 week ago",
    review:
      "Very premium shoe. Fits perfectly and looks exactly like the pictures.",
  },
];

const specifications = [
  ["Brand", "Nike"],
  ["Model", "Air Jordan Retro High"],
  ["Material", "Premium Leather"],
  ["Weight", "420 g"],
  ["Warranty", "1 Year"],
  ["Country", "Vietnam"],
  ["Gender", "Unisex"],
];

const tabs = [
  "Description",
  "Reviews",
  "Specifications",
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className="mx-auto mt-16 max-w-7xl px-4">

      {/* Tabs */}

      <div className="flex flex-wrap gap-4 border-b border-gray-200">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative
              px-6
              py-4
              text-lg
              font-semibold
              transition
              ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              }
            `}
          >
            {tab}

            {activeTab === tab && (
              <motion.div
                layoutId="tabIndicator"
                className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-blue-600"
              />
            )}
          </button>

        ))}

      </div>

      <AnimatePresence mode="wait">

        {/* Description */}

        {activeTab === "Description" && (

          <motion.div
            key="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
          >

            <h2 className="mb-6 text-3xl font-black">
              Product Description
            </h2>

            <p className="leading-8 text-gray-600">
              Experience premium craftsmanship with the Nike Air Jordan
              Retro High. Designed using high-quality leather and
              engineered cushioning, this sneaker combines classic
              heritage with modern comfort. Whether for daily wear or
              performance, it provides exceptional grip, durability,
              and all-day comfort.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" />
                Premium Leather Material
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" />
                Lightweight Construction
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" />
                Breathable Inner Mesh
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-600" />
                Comfortable Cushioned Sole
              </div>

            </div>

          </motion.div>

        )}

        {/* Reviews */}

        {activeTab === "Reviews" && (

          <motion.div
            key="reviews"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-10 space-y-6"
          >

            {/* Rating Summary */}

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

              <h2 className="text-3xl font-black">
                Customer Reviews
              </h2>

              <div className="mt-5 flex items-center gap-4">

                <span className="text-5xl font-black text-blue-600">
                  4.9
                </span>

                <div>

                  <div className="flex">
                    {[1,2,3,4,5].map((item)=>(
                      <Star
                        key={item}
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-500">
                    Based on 2,364 reviews
                  </p>

                </div>

              </div>

            </div>

            {/* Review Cards */}

            {reviews.map((review) => (

              <div
                key={review.id}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="font-bold">
                      {review.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {review.date}
                    </p>

                  </div>

                  <div className="flex">

                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                  </div>

                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {review.review}
                </p>

              </div>

            ))}

          </motion.div>

        )}

        {/* Specifications */}

        {activeTab === "Specifications" && (

          <motion.div
            key="specifications"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
          >

            <h2 className="mb-6 text-3xl font-black">
              Specifications
            </h2>

            <div className="overflow-hidden rounded-2xl border">

              {specifications.map(([title, value]) => (

                <div
                  key={title}
                  className="grid grid-cols-2 border-b last:border-none"
                >

                  <div className="bg-gray-50 p-4 font-semibold">
                    {title}
                  </div>

                  <div className="p-4">
                    {value}
                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default ProductTabs;