import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("novacart-cart");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "novacart-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // -----------------------------
  // Add To Cart
  // -----------------------------

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor
      );

      if (existing) {
        return prev.map((item) =>
          item.id === existing.id &&
          item.selectedSize === existing.selectedSize &&
          item.selectedColor === existing.selectedColor
            ? {
                ...item,
                quantity:
                  item.quantity + product.quantity,
              }
            : item
        );
      }

      return [...prev, product];
    });
  };

  // -----------------------------
  // Remove Item
  // -----------------------------

  const removeFromCart = (id, size, color) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
      )
    );
  };

  // -----------------------------
  // Increase Quantity
  // -----------------------------

  const increaseQuantity = (
    id,
    size,
    color
  ) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.selectedSize === size &&
        item.selectedColor === color
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };
    // -----------------------------
  // Decrease Quantity
  // -----------------------------

  const decreaseQuantity = (id, size, color) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id &&
          item.selectedSize === size &&
          item.selectedColor === color
            ? {
                ...item,
                quantity: Math.max(1, item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // -----------------------------
  // Clear Cart
  // -----------------------------

  const clearCart = () => {
    setCartItems([]);
  };

  // -----------------------------
  // Cart Totals
  // -----------------------------

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal === 0 ? 0 : subtotal >= 99 ? 0 : 9.99;

  const tax = subtotal * 0.08;

  const total = subtotal + shipping + tax;

  // -----------------------------
  // Context Value
  // -----------------------------

  const value = {
    cartItems,

    addToCart,
    removeFromCart,

    increaseQuantity,
    decreaseQuantity,

    clearCart,

    totalItems,
    subtotal,
    shipping,
    tax,
    total,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};