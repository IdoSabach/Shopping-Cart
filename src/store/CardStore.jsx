import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product, quantity=1) =>
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += quantity;
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...product, quantity }] };
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
      return state;
    }),
  cleanAll: () => set({ cart: [] }),
}));

export default useCartStore;
