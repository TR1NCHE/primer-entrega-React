import React, { useState } from 'react';
import ItemQuantitySelector from '../itemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../addItemButton/AddItemButton';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQty) => {
        setQuantity(newQty);
    };

    return (
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <img src={item.image} alt={item.title} style={{ width: '300px', borderRadius: '8px' }} />
            <div>
                <h2>{item.title}</h2>
                <p style={{ fontStyle: 'italic' }}>{item.description}</p>
                <p><strong>Precio:</strong> ${item.price}</p>

                <ItemQuantitySelector initial={1} stock={10} onQuantityChange={handleQuantityChange} />
                <AddItemButton item={item} quantity={quantity} />
            </div>
        </div>
    );
};

export default ItemDetail;
