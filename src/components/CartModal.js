import React from 'react';
import { useCart } from './CartContext';

const CartModal = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    console.log("Productos en el carrito:", cart); // Esto nos mostrará los productos en el carrito

    if (!isOpen) return null;

    return (
        <div className="absolute top-16 right-4 w-80 h-auto bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Carrito</h2>
            {cart.map(product => (
                <div key={product.id} className="flex justify-between items-center mb-4">
                    <img src={product.image} alt={product.name} className="w-16 h-16" />
                    <div>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                    <div>
                        <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                </div>
            ))}
            <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Cerrar</button>
        </div>
    );
}

export default CartModal;
