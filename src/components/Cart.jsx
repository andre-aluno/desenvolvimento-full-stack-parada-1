import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  return (
    <div className="container">
      {cart.length === 0 ? (
        <h2>O carrinho está vazio.</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.name}</h2>
            <p>Quantidade: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
