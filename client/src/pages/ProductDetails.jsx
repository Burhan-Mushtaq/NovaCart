import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import { products } from "../data/products";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";
import RelatedProducts from "../components/product/RelatedProducts";

const ProductDetails = () => {

  const { id } = useParams();

  const product = useMemo(
    () =>
      products.find(
        (item) => String(item.id) === String(id)
      ),
    [id]
  );

  if (!product) {

    return (

      <section className="flex min-h-screen items-center justify-center bg-gray-50">

        <div className="text-center">

          <h1 className="text-5xl font-black">
            Product Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            The requested product does not exist.
          </p>

          <Link
            to="/shop"
            className="
            mt-8
            inline-flex
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
          "
          >
            Back to Shop
          </Link>

        </div>

      </section>

    );

  }

  return (

    <section className="bg-gradient-to-b from-white via-gray-50 to-white">

      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

        {/* Breadcrumb */}

        <div className="mb-10 flex items-center gap-2 text-sm text-gray-500">

          <Link to="/">
            Home
          </Link>

          <ChevronRight size={15} />

          <Link to="/shop">
            Shop
          </Link>

          <ChevronRight size={15} />

          <span className="font-semibold text-gray-900">
            {product.name}
          </span>

        </div>

        {/* Main Section */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .4,
          }}
          className="
          grid
          gap-12
          lg:grid-cols-2
        "
        >

          {/* Gallery */}

          <ProductGallery product={product} />

          {/* Info */}

          <ProductInfo product={product} />

        </motion.div>

        {/* Features */}

        <div
          className="
          mt-20
          grid
          gap-6
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-8
          md:grid-cols-3
        "
        >

          <div className="flex gap-4">

            <Truck
              size={32}
              className="text-blue-600"
            />

            <div>

              <h3 className="font-bold">
                Free Shipping
              </h3>

              <p className="text-gray-500">
                On orders above ₹4,999
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <RotateCcw
              size={32}
              className="text-blue-600"
            />

            <div>

              <h3 className="font-bold">
                Easy Returns
              </h3>

              <p className="text-gray-500">
                30 days replacement
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <ShieldCheck
              size={32}
              className="text-blue-600"
            />

            <div>

              <h3 className="font-bold">
                Secure Payment
              </h3>

              <p className="text-gray-500">
                100% encrypted checkout
              </p>

            </div>

          </div>

        </div>

        {/* Product Tabs */}

        <ProductTabs product={product} />

        {/* Related */}

        <RelatedProducts product={product} />

      </div>

    </section>

  );

};

export default ProductDetails;