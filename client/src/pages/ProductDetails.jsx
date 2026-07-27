import { Navigate, useParams } from "react-router-dom";

import products from "../data/products";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";
import RelatedProducts from "../components/product/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">

      <section className="mx-auto max-w-7xl px-4 py-10">

        {/* Breadcrumb */}

        <div className="mb-8 text-sm text-gray-500">
          Home / Shop /
          <span className="font-semibold text-gray-900">
            {" "}
            {product.name}
          </span>
        </div>

        {/* Product */}

        <div className="grid gap-12 lg:grid-cols-2">

          <ProductGallery
            product={product}
          />

          <ProductInfo
            product={product}
          />

        </div>

      </section>

      <ProductTabs
        product={product}
      />

      <RelatedProducts
        product={product}
      />

    </main>
  );
};

export default ProductDetails;