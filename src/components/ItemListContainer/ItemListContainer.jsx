import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const mockProducts = [
  { id: 1, name: "Producto 1", category: "canales" },
  { id: 2, name: "Producto 2", category: "Suscripciones" },
  { id: 3, name: "Producto 3", category: "Blog" },
  { id: 4, name: "Producto 4", category: "canales" },
];

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const normalizedCategory = categoryId.toLowerCase();
      setProducts(mockProducts.filter((product) => product.category.toLowerCase() === normalizedCategory));
    } else {
      setProducts(mockProducts);
    }
  }, [categoryId]);

  return (
    <div style={{ padding: "20px", margin: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", backgroundColor: "black", fontSize: "18px", fontWeight: "bold", color: "white" }}>
      <h2>{greeting}</h2>
      {categoryId && <h3>Categoría: {categoryId}</h3>}
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} style={{ listStyle: "none", margin: "10px 0" }}>
              <Link to={`/item/${product.id}`} style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
                <div style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center", backgroundColor: "#fff", color: "#000", width: "200px", margin: "auto", cursor: "pointer" }}>
                  {product.name}
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>No hay productos en esta categoría</p>
        )}
      </ul>
    </div>
  );
};

export default ItemListContainer;
