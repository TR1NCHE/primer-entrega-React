import React from 'react';
import products from '../../data/products';
import ItemList from '../itemList/ItemList';

const ItemListContainer = () => {
  return (
    <div>
      <h2 style={{ padding: '20px' }}>Catálogo de Dibujos Animados</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;