import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    const existingProduct = cart.find((item) => item.id === productToAdd.id);
    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...productToAdd, quantity: 1 }
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    // Evitar que la cantidad sea menor que 1
    if (quantity < 1) {
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const increaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
