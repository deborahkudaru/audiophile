"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
  description?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void; // Updated to accept quantity
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (
    item: Omit<CartItem, "quantity">,
    quantity: number = 1
  ) => {
    // Accept quantity parameter
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map(
          (i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i // Use the quantity parameter
        );
      }
      return [...prev, { ...item, quantity }]; // Use the quantity parameter
    });
  };

  const setQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }

    setCart((prev) => {
      const newCart = prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
      );
      return newCart;
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) {
        toast.error(`Removed ${item.name} from cart`, {
          icon: "🗑️",
        });
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const clearCart = () => {
    if (cart.length > 0) {
      toast.success("Cart cleared!", {
        icon: "🛒",
        duration: 2000, // 2 seconds duration
      });
    }
    setCart([]);
  };

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, setQuantity, removeItem, clearCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
