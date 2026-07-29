import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ClipboardList,
  Star,
  MessageCircle,
} from "lucide-react";

const ProductTabs = ({ product }) => {

  const tabs = [
    {
      id: "description",
      label: "Description",
      icon: FileText,
    },
    {
      id: "specifications",
      label: "Specifications",
      icon: ClipboardList,
    },
    {
      id: "reviews",
      label: "Reviews",
      icon: Star,
    },
    {
      id: "faq",
      label: "FAQ",
      icon: MessageCircle,
    },
  ];

  const [activeTab, setActiveTab] = useState("description");

  return (

    <section className="mt-20">

      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">

        {/* Header */}

        <div className="flex flex-wrap border-b border-gray-200">

          {tabs.map((tab) => {

            const Icon = tab.icon;

            return (

              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  px-6
                  py-5
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    activeTab === tab.id
                      ? "border-b-2 border-blue-600 bg-blue-50 text-blue-600"
                      : "hover:bg-gray-50"
                  }
                `}
              >
                <Icon size={18} />

                {tab.label}

              </button>

            );

          })}

        </div>

        {/* Content */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: .3,
            }}
            className="p-8"
          >
                        {/* Description */}

            {activeTab === "description" && (

              <div className="space-y-6">

                <h2 className="text-3xl font-black text-gray-900">
                  Product Description
                </h2>

                <p className="leading-8 text-gray-600">
                  {product.description}
                </p>

                <div className="grid gap-6 md:grid-cols-3">

                  <div className="rounded-2xl bg-gray-50 p-6">

                    <h3 className="font-bold text-gray-900">
                      Premium Quality
                    </h3>

                    <p className="mt-3 text-gray-500 leading-7">
                      Built using high-quality materials
                      for durability and long-lasting
                      performance.
                    </p>

                  </div>

                  <div className="rounded-2xl bg-gray-50 p-6">

                    <h3 className="font-bold text-gray-900">
                      Comfortable
                    </h3>

                    <p className="mt-3 text-gray-500 leading-7">
                      Designed with comfort and usability
                      in mind for everyday use.
                    </p>

                  </div>

                  <div className="rounded-2xl bg-gray-50 p-6">

                    <h3 className="font-bold text-gray-900">
                      Modern Design
                    </h3>

                    <p className="mt-3 text-gray-500 leading-7">
                      Minimal design inspired by premium
                      global brands.
                    </p>

                  </div>

                </div>

              </div>

            )}

            {/* Specifications */}

            {activeTab === "specifications" && (

              <div>

                <h2 className="mb-8 text-3xl font-black">
                  Specifications
                </h2>

                <div className="overflow-hidden rounded-2xl border border-gray-200">

                  <table className="w-full">

                    <tbody>

                      <tr className="border-b">

                        <td className="bg-gray-50 p-5 font-semibold">
                          Brand
                        </td>

                        <td className="p-5">
                          {product.brand}
                        </td>

                      </tr>

                      <tr className="border-b">

                        <td className="bg-gray-50 p-5 font-semibold">
                          Category
                        </td>

                        <td className="p-5">
                          {product.category}
                        </td>

                      </tr>

                      <tr className="border-b">

                        <td className="bg-gray-50 p-5 font-semibold">
                          SKU
                        </td>

                        <td className="p-5">
                          {product.sku || "N/A"}
                        </td>

                      </tr>

                      <tr>

                        <td className="bg-gray-50 p-5 font-semibold">
                          Warranty
                        </td>

                        <td className="p-5">
                          1 Year Manufacturer Warranty
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

              </div>

            )}

            {/* Reviews */}

            {activeTab === "reviews" && (

              <div>

                <h2 className="mb-8 text-3xl font-black">
                  Customer Reviews
                </h2>

                {[1,2,3].map((review)=>(

                  <div
                    key={review}
                    className="mb-6 rounded-2xl border border-gray-200 p-6"
                  >

                    <div className="flex items-center justify-between">

                      <h3 className="font-bold">
                        Customer {review}
                      </h3>

                      <div className="flex">

                        {[1,2,3,4,5].map((star)=>(

                          <Star
                            key={star}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />

                        ))}

                      </div>

                    </div>

                    <p className="mt-4 leading-7 text-gray-600">
                      Excellent product with premium
                      quality. Highly recommended.
                    </p>

                  </div>

                ))}

              </div>

            )}

            {/* FAQ */}

            {activeTab === "faq" && (

              <div>

                <h2 className="mb-8 text-3xl font-black">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-5">

                  <div className="rounded-2xl border border-gray-200 p-6">

                    <h3 className="font-bold">
                      Is this product original?
                    </h3>

                    <p className="mt-3 text-gray-500 leading-7">
                      Yes. Every product sold on our
                      platform is 100% genuine and
                      quality checked.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6">

                    <h3 className="font-bold">
                      Can I return this product?
                    </h3>

                    <p className="mt-3 text-gray-500 leading-7">
                      Yes. You can return it within
                      30 days if it meets our return
                      policy.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-gray-200 p-6">

                    <h3 className="font-bold">
                      Does it include warranty?
                    </h3>

                    <p className="mt-3 text-gray-500 leading-7">
                      Yes, manufacturer warranty is
                      available where applicable.
                    </p>

                  </div>

                </div>

              </div>

            )}

          </motion.div>

        </AnimatePresence>

      </div>

    </section>

  );

};

export default ProductTabs;