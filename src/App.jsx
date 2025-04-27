import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import ProductList from './components/ProductList';

const products = [
  { id: 1, name: 'Livro 1' },
  { id: 2, name: 'Livro 2' },
];

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
