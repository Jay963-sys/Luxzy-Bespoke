import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

interface CartStore {
  isOpen: boolean;
  cartItems: CartItem[];
  toggleCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  isOpen: false,
  cartItems: [],
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (newItem) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (i) => i.id === newItem.id && i.size === newItem.size,
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex].quantity += newItem.quantity || 1;

        return {
          cartItems: updatedCart,
          isOpen: true,
        };
      }

      return {
        cartItems: [
          ...state.cartItems,
          { ...newItem, quantity: newItem.quantity || 1 },
        ],
        isOpen: true,
      };
    }),

  removeItem: (id, size) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => !(item.id === id && item.size === size),
      ),
    })),
  clearCart: () => set({ cartItems: [], isOpen: false }),
}));
