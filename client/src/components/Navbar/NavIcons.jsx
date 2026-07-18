import {
  Heart,
  ShoppingCart,
  User,
  Search,
} from "lucide-react";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-2">

      <button className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-gray-200
bg-white
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-500
hover:text-blue-600
hover:shadow-lg
">
        <Search size={20} />
      </button>

      <button className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-gray-200
bg-white
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-500
hover:text-blue-600
hover:shadow-lg
">
        <Heart size={20} />

        <span className="
absolute
-right-1
-top-1
flex
h-5
w-5
items-center
justify-center
rounded-full
bg-gradient-to-r
from-red-500
to-pink-500
text-[10px]
font-bold
text-white
shadow-md
">
  0
</span>
      </button>

      <button className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-gray-200
bg-white
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-500
hover:text-blue-600
hover:shadow-lg
">
        <ShoppingCart size={20} />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
          0
        </span>
      </button>

      <button className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-gray-200
bg-white
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-500
hover:text-blue-600
hover:shadow-lg
">
        <User size={20} />
      </button>

    </div>
  );
};

export default NavIcons;