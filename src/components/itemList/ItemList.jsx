import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
            {products.map((item) => (
                <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '200px' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%' }} />
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <Link to={`/item/${item.id}`}>Ver más</Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
