import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductTabs from "../components/product/ProductTabs";
import RelatedProducts from "../components/product/RelatedProducts";

const ProductDetails = () => {
  return (
    <main className="bg-[#fafafa] min-h-screen">

      <section className="mx-auto max-w-7xl px-4 py-10">

        <div className="grid gap-10 lg:grid-cols-2">

          <ProductGallery />

          <ProductInfo />

        </div>

      </section>

      <ProductTabs />

      <RelatedProducts />

    </main>
  );
};

export default ProductDetails;