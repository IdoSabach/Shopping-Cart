import { create } from "zustand";

const useCartStore = create((set) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemCount = storedCart.reduce((total, item) => total + item.quantity, 0);

  return {
    cart: storedCart,
    itemCount,
    addToCart: (product, quantity = 1) =>
      set((state) => {
        const existingIndex = state.cart.findIndex((item) => item.id === product.id);
        const updatedCart = [...state.cart];
        let updatedItemCount = state.itemCount;

        if (existingIndex !== -1) {
          updatedCart[existingIndex].quantity += quantity;
          updatedItemCount += quantity;
        } else {
          updatedCart.push({ ...product, quantity });
          updatedItemCount += quantity;
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return { cart: updatedCart, itemCount: updatedItemCount };
      }),
    removeFromCart: (productId) =>
      set((state) => {
        const removedItem = state.cart.find((product) => product.id === productId);
        const updatedCart = state.cart.filter((product) => product.id !== productId);
        const updatedItemCount = state.itemCount - (removedItem ? removedItem.quantity : 0);

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return { cart: updatedCart, itemCount: updatedItemCount };
      }),
    decrementQuantity: (productId) =>
      set((state) => {
        const updatedCart = [...state.cart];
        const existingIndex = updatedCart.findIndex((item) => item.id === productId);

        if (existingIndex !== -1 && updatedCart[existingIndex].quantity > 1) {
          updatedCart[existingIndex].quantity -= 1;
          return { cart: updatedCart, itemCount: state.itemCount - 1 };
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return { cart: updatedCart, itemCount: state.itemCount };
      }),
    cleanAll: () => {
      localStorage.removeItem("cart");
      return { cart: [], itemCount: 0 };
    },
  };
});

export default useCartStore;
