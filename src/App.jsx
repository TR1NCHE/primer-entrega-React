import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
