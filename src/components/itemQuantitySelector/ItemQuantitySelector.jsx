import React, { useState } from 'react';

const ItemQuantitySelector = ({ initial = 1, stock = 10, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initial);

    const increase = () => {
        if (quantity < stock) {
            const newQty = quantity + 1;
            setQuantity(newQty);
            onQuantityChange(newQty);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            const newQty = quantity - 1;
            setQuantity(newQty);
            onQuantityChange(newQty);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
            <button onClick={decrease} style={{ padding: '5px 10px' }}>-</button>
            <span>{quantity}</span>
            <button onClick={increase} style={{ padding: '5px 10px' }}>+</button>
        </div>
    );
};

export default ItemQuantitySelector;
