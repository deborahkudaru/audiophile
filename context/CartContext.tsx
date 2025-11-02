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
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        toast.success(`Increased ${item.name} quantity!`, {
          icon: '🛒',
        });
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      toast.success(`${item.name} added to cart!`, {
        icon: '🛒',
      });
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const setQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }
    
    setCart((prev) => {
      const item = prev.find(i => i.id === id);
      const newCart = prev.map((i) => 
        i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
      );
      
      // Show toast for quantity changes
      if (item && quantity > item.quantity) {
        toast.success(`Increased ${item.name} quantity to ${quantity}`, {
          icon: '➕',
        });
      } else if (item && quantity < item.quantity) {
        toast.success(`Decreased ${item.name} quantity to ${quantity}`, {
          icon: '➖',
        });
      }
      
      return newCart;
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => {
      const item = prev.find(i => i.id === id);
      if (item) {
        toast.error(`Removed ${item.name} from cart`, {
          icon: '🗑️',
        });
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const clearCart = () => {
    if (cart.length > 0) {
      toast.success('Cart cleared!', {
        icon: '🛒',
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