// src/components/itemDetailContainer/ItemDetailContainer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import ItemDetail from '../itemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const item = products.find((p) => p.id === itemId);

  if (!item) return <p style={{ padding: '20px' }}>Producto no encontrado.</p>;

  return (
    <ItemDetail item={item} />
  );
};

export default ItemDetailContainer;
