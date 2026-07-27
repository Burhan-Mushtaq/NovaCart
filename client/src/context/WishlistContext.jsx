import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem("novacart-wishlist");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "novacart-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  // -----------------------------
  // Add To Wishlist
  // -----------------------------

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find(
        (item) => item.id === product.id
      );

      if (exists) return prev;

      return [...prev, product];
    });
  };

  // -----------------------------
  // Remove From Wishlist
  // -----------------------------

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // -----------------------------
  // Toggle Wishlist
  // -----------------------------

  const toggleWishlist = (product) => {
    const exists = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (exists) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // -----------------------------
  // Check Wishlist
  // -----------------------------

  const isInWishlist = (id) => {
    return wishlistItems.some(
      (item) => item.id === id
    );
  };

  // -----------------------------
  // Clear Wishlist
  // -----------------------------

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const value = {
    wishlistItems,

    addToWishlist,
    removeFromWishlist,
    toggleWishlist,

    isInWishlist,

    clearWishlist,

    totalWishlistItems: wishlistItems.length,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};