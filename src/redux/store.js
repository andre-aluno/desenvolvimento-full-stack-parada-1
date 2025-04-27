import { createStore } from 'redux';

const initialState = {
    cart: []
};

const addToCart = (state, action) => {
    const existingProduct = state.cart.find(item => item.id === action.payload.id);
    if (existingProduct) {
        // Se já existe, aumenta a quantidade
        return {
            ...state,
            cart: state.cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        };
    } else {
        // Se não existe, adiciona o produto com quantity 1
        return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
    }
};

const removeFromCart = (state, action) => {
    const productToRemove = state.cart.find(item => item.id === action.payload);
    if (productToRemove && productToRemove.quantity > 1) {
        // Se a quantidade > 1, só diminui a quantidade
        return {
            ...state,
            cart: state.cart.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        };
    } else {
        // Se quantidade == 1, remove o item
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        };
    }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return addToCart(state, action);
        case 'REMOVE_FROM_CART':
            return removeFromCart(state, action);
        default:
            return state;
    }
};

const store = createStore(cartReducer);

export default store;