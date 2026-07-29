import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Share2,
  ZoomIn,
} from "lucide-react";

const ProductGallery = ({ product }) => {

  const images =
    product.images?.length > 0
      ? product.images
      : [product.image];

  const [selectedImage, setSelectedImage] = useState(
    images[0]
  );

  const [liked, setLiked] = useState(false);

  return (

    <div className="space-y-6">

      {/* Main Image */}

      <motion.div
        layout
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-gradient-to-br
        from-gray-50
        via-white
        to-gray-100
      "
      >

        {/* Discount */}

        {product.discount && (

          <div
            className="
            absolute
            left-6
            top-6
            z-20
            rounded-full
            bg-red-500
            px-4
            py-2
            text-sm
            font-bold
            text-white
          "
          >

            {product.discount}% OFF

          </div>

        )}

        {/* Floating Actions */}

        <div
          className="
          absolute
          right-6
          top-6
          z-20
          flex
          flex-col
          gap-3
        "
        >

          <button
            onClick={() => setLiked(!liked)}
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-lg
            transition
            hover:scale-110
          "
          >

            <Heart
              size={20}
              className={
                liked
                  ? "fill-red-500 text-red-500"
                  : ""
              }
            />

          </button>

          <button
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-lg
            transition
            hover:scale-110
          "
          >

            <Share2 size={20} />

          </button>

        </div>

        {/* Image */}

        <div
          className="
          flex
          h-[520px]
          items-center
          justify-center
          overflow-hidden
        "
        >

          <AnimatePresence mode="wait">

            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt={product.name}
              initial={{
                opacity: 0,
                scale: .9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: .3,
              }}
              className="
              h-full
              w-full
              object-contain
              transition-transform
              duration-500
              group-hover:scale-110
            "
            />

          </AnimatePresence>

        </div>

        {/* Zoom */}

        <div
          className="
          pointer-events-none
          absolute
          bottom-6
          right-6
          rounded-full
          bg-white/90
          p-3
          shadow-lg
        "
        >

          <ZoomIn size={20} />

        </div>

      </motion.div>

      {/* Thumbnails */}

      <div className="flex gap-4 overflow-x-auto pb-2">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`
              overflow-hidden
              rounded-2xl
              border-2
              transition-all
              ${
                selectedImage === image
                  ? "border-blue-600"
                  : "border-gray-200"
              }
            `}
          >

            <img
              src={image}
              alt=""
              className="
              h-24
              w-24
              object-contain
              bg-gray-50
            "
            />

          </button>

        ))}

      </div>

    </div>

  );

};

export default ProductGallery;