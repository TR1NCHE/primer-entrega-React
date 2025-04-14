import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase/firebaseConfig';
import ItemDetail from '../itemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const ref = doc(db, 'products', itemId);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        } else {
          setItem(null);
        }
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  if (loading) return <p style={{ padding: '20px' }}>Cargando producto...</p>;
  if (!item) return <p style={{ padding: '20px' }}>Producto no encontrado.</p>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
