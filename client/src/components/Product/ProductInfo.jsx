import { useState } from "react";
import {
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Minus,
  Plus,
  Check,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

const colors = [
  {
    name: "Black",
    value: "bg-black",
  },
  {
    name: "White",
    value: "bg-white border",
  },
  {
    name: "Blue",
    value: "bg-blue-600",
  },
  {
    name: "Red",
    value: "bg-red-500",
  },
];

const sizes = ["7", "8", "9", "10", "11"];

const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("9");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-8">

      {/* Brand */}

      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        Nike Official Store
      </span>

      {/* Title */}

      <div>

        <h1 className="text-4xl font-black leading-tight text-gray-900">
          Nike Air Jordan Retro High
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Premium lifestyle sneakers built for comfort,
          everyday wear and performance.
        </p>

      </div>

      {/* Rating */}

      <div className="flex flex-wrap items-center gap-4">

        <div className="flex">

          {[1,2,3,4,5].map((item)=>(
            <Star
              key={item}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

        </div>

        <span className="font-semibold">
          4.9
        </span>

        <span className="text-gray-500">
          (2,364 Reviews)
        </span>

        <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">

          <Check size={15}/>

          In Stock

        </span>

      </div>

      {/* Price */}

      <div className="flex items-end gap-4">

        <h2 className="text-5xl font-black text-blue-600">
          $189
        </h2>

        <span className="pb-2 text-2xl text-gray-400 line-through">
          $249
        </span>

        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600">
          24% OFF
        </span>

      </div>

      {/* Divider */}

      <div className="h-px bg-gray-200"/>

      {/* Colors */}

      <div>

        <h3 className="mb-4 text-lg font-bold">
          Color
        </h3>

        <div className="flex gap-4">

          {colors.map((color)=>(
            <button
              key={color.name}
              onClick={()=>setSelectedColor(color.name)}
              className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              transition
              ${
                selectedColor===color.name
                ? "ring-4 ring-blue-200"
                : ""
              }
              `}
            >

              <div
                className={`h-8 w-8 rounded-full ${color.value}`}
              />

            </button>
          ))}

        </div>

      </div>

      {/* Sizes */}

      <div>

        <h3 className="mb-4 text-lg font-bold">
          Size
        </h3>

        <div className="flex flex-wrap gap-3">

          {sizes.map((size)=>(
            <button
              key={size}
              onClick={()=>setSelectedSize(size)}
              className={`
              h-12
              w-12
              rounded-xl
              border
              font-semibold
              transition
              ${
                selectedSize===size
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-200 hover:border-blue-500"
              }
              `}
            >
              {size}
            </button>
          ))}

        </div>

      </div>

      {/* Quantity */}
            <div>

        <h3 className="mb-4 text-lg font-bold">
          Quantity
        </h3>

        <div className="flex w-fit items-center rounded-2xl border border-gray-200">

          <button
            onClick={() =>
              setQuantity(Math.max(1, quantity - 1))
            }
            className="p-4 hover:bg-gray-100"
          >
            <Minus size={18}/>
          </button>

          <span className="min-w-14 text-center text-lg font-bold">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
            className="p-4 hover:bg-gray-100"
          >
            <Plus size={18}/>
          </button>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-col gap-4 sm:flex-row">

        <button
          className="
          flex
          flex-1
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          py-4
          text-lg
          font-bold
          text-white
          shadow-xl
          transition
          hover:-translate-y-1
        "
        >
          <ShoppingCart size={22}/>
          Add To Cart
        </button>

        <button
          className="
          flex
          flex-1
          items-center
          justify-center
          gap-3
          rounded-2xl
          border-2
          border-blue-600
          bg-white
          py-4
          text-lg
          font-bold
          text-blue-600
          transition
          hover:bg-blue-600
          hover:text-white
        "
        >
          <CreditCard size={22}/>
          Buy Now
        </button>

      </div>

      {/* Features */}

      <div className="space-y-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-4">
          <Truck className="text-blue-600"/>
          <div>
            <h4 className="font-bold">
              Free Shipping
            </h4>
            <p className="text-sm text-gray-500">
              Free delivery on orders over $99
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <RotateCcw className="text-blue-600"/>
          <div>
            <h4 className="font-bold">
              Easy Returns
            </h4>
            <p className="text-sm text-gray-500">
              30-day hassle-free return policy
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ShieldCheck className="text-blue-600"/>
          <div>
            <h4 className="font-bold">
              Secure Payments
            </h4>
            <p className="text-sm text-gray-500">
              100% secure checkout with encrypted payments
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProductInfo;