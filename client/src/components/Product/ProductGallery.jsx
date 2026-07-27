import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, Expand } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
  "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=900",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900",
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-5">

      {/* Main Image */}

      <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm">

        {/* Wishlist */}

        <button
          className="
          absolute
          right-5
          top-5
          z-20
          flex
          h-12
          w-12
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

        {/* Share */}

        <button
          className="
          absolute
          right-5
          top-20
          z-20
          flex
          h-12
          w-12
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

        {/* Expand */}

        <button
          className="
          absolute
          right-5
          top-35
          z-20
          flex
          h-12
          w-12
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

        <motion.img
          key={selectedImage}
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .3 }}
          src={selectedImage}
          alt="Product"
          className="
          mx-auto
          h-[500px]
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
            onClick={() => setSelectedImage(image)}
            className={`
              overflow-hidden
              rounded-2xl
              border-2
              transition
              ${
                selectedImage === image
                  ? "border-blue-600"
                  : "border-transparent hover:border-gray-300"
              }
            `}
          >

            <img
              src={image}
              alt=""
              className="h-28 w-full object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
};

export default ProductGallery;