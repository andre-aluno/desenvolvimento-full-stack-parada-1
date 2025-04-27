import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setMessage(`${product.name} foi adicionado ao carrinho!`);

    // Limpar a mensagem depois de 3 segundos
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="container">
      {message && (
        <div style={{
          backgroundColor: '#DFF2BF',
          color: '#4F8A10',
          padding: '1rem',
          borderRadius: '5px',
          marginBottom: '1rem',
          width: '100%',
          textAlign: 'center'
        }}>
          {message}
        </div>
      )}

      {products.map((product) => (
        <div key={product.id} className="card">
          <h2>{product.name}</h2>
          <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
