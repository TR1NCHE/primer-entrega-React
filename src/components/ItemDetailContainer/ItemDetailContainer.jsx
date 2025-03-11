import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  return (
    <div style={{ padding: "20px", margin: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center" }}>
      <h2>Detalle del Producto</h2>
      <p>ID del Producto: {itemId}</p>
    </div>
  );
};

export default ItemDetailContainer;
