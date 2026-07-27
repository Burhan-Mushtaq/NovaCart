import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Share2,
  Expand,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image
  );

  useEffect(() => {
    setSelectedImage(product.images?.[0] || product.image);
  }, [product]);

  const images =
    product.images && product.images.length
      ? product.images
      : [product.image];

  const currentIndex = images.indexOf(selectedImage);

  const nextImage = () => {
    const next =
      (currentIndex + 1) % images.length;

    setSelectedImage(images[next]);
  };

  const previousImage = () => {
    const prev =
      (currentIndex - 1 + images.length) %
      images.length;

    setSelectedImage(images[prev]);
  };

  return (
    <div className="space-y-6">

      {/* Main Image */}

      <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-sm">

        {/* Top Buttons */}

        <div className="absolute right-5 top-5 z-20 flex flex-col gap-3">

          <button
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-white/90
            shadow-lg
            backdrop-blur
            transition
            hover:text-red-500
          "
          >
            <Heart size={20} />
          </button>

          <button
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-white/90
            shadow-lg
            backdrop-blur
            transition
            hover:text-blue-600
          "
          >
            <Share2 size={20} />
          </button>

          <button
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-white/90
            shadow-lg
            backdrop-blur
            transition
            hover:text-green-600
          "
          >
            <Expand size={20} />
          </button>

        </div>

        {/* Previous */}

        {images.length > 1 && (
          <button
            onClick={previousImage}
            className="
            absolute
            left-5
            top-1/2
            z-20
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-lg
            transition
            hover:bg-blue-600
            hover:text-white
          "
          >
            <ChevronLeft />
          </button>
        )}

        {/* Next */}

        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="
            absolute
            right-20
            top-1/2
            z-20
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-lg
            transition
            hover:bg-blue-600
            hover:text-white
          "
          >
            <ChevronRight />
          </button>
        )}

        {/* Main Image */}

        <motion.img
          key={selectedImage}
          src={selectedImage}
          alt={product.name}
          initial={{
            opacity: 0,
            scale: .95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: .30,
          }}
          className="
          mx-auto
          h-[520px]
          object-contain
          transition-transform
          duration-500
          group-hover:scale-110
        "
        />

      </div>

      {/* Thumbnails */}

      <div className="grid grid-cols-4 gap-4">

        {images.map((image) => (

          <button
            key={image}
            onClick={() =>
              setSelectedImage(image)
            }
            className={`
              overflow-hidden
              rounded-2xl
              border-2
              transition-all
              duration-300
              ${
                selectedImage === image
                  ? "border-blue-600 shadow-lg"
                  : "border-gray-200 hover:border-blue-400"
              }
            `}
          >

            <img
              src={image}
              alt={product.name}
              className="
              h-28
              w-full
              object-cover
              transition
              hover:scale-105
            "
            />

          </button>

        ))}

      </div>

      {/* Image Counter */}

      <div className="text-center text-sm text-gray-500">

        Image{" "}
        <span className="font-bold">
          {currentIndex + 1}
        </span>{" "}
        of{" "}
        <span className="font-bold">
          {images.length}
        </span>

      </div>

    </div>
  );
};

export default ProductGallery;