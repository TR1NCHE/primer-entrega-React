import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItem = cart.find((i) => i.id === item.id);
        if (existingItem) {
            setCart(
                cart.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
                )
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const clearCart = () => setCart([]);

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const getTotalQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                clearCart,
                removeItem,
                getTotalQuantity,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
