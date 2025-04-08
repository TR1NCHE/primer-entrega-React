import React from 'react';
import { useCart } from '../../context/CartContext';

const AddItemButton = ({ item, quantity }) => {
    const { addItem } = useCart();

    const handleAdd = () => {
        addItem(item, quantity);
        alert(`${quantity} "${item.title}" agregado al carrito`);
    };

    return (
        <button onClick={handleAdd} style={{ marginTop: '10px', padding: '10px 20px' }}>
            Agregar al carrito
        </button>
    );
};

export default AddItemButton;
