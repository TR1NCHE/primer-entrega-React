import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase/firebaseConfig';
import ItemList from '../itemList/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h2 style={{ padding: '20px' }}>Catálogo de Dibujos Animados</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
