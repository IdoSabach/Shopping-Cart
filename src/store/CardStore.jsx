import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += 1;
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  decrementQuantity: (productId) =>
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (item) => item.id === productId
      );
      if (existingIndex !== -1 && state.cart[existingIndex].quantity > 1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity -= 1;
        return { cart: updatedCart };
      }
      return state; // If product not found or quantity is already 1, return current state
    }),
  cleanAll: () => set({ cart: [] }),
}));

export default useCartStore;
