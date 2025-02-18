import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ 
      padding: "20px", 
      margin: "20px", 
      border: "1px solid #ddd", 
      borderRadius: "8px", 
      textAlign: "center",
      backgroundColor: "black",
      fontSize: "18px",
      fontWeight: "bold"
    }}>
      {greeting}
    </div>
  );
};

export default ItemListContainer;
