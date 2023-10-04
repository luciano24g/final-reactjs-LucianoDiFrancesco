import React, { useState } from 'react';
import { useCart } from './CartContext';

const CartWidget = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="relative inline-block">
            <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer z-10">🛒</span>
            {totalItems > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center z-20 transform translate-x-1/2 -translate-y-1/2">{totalItems}</span>}
            
            {isOpen && (
                <div className="absolute top-8 right-0 w-80 max-h-96 bg-white p-4 rounded shadow-lg overflow-y-auto z-30">
                    <h2 className="text-xl text-black font-bold mb-4 border-b pb-2">Carrito</h2>
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center my-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16" />
                            <div className="flex flex-col items-start ml-2">
                                <p className="font-medium text-black">{item.name}</p>
                                <p className="text-black">${item.price}</p>
                            </div>
                            <div className="flex items-center">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 text-black px-2 py-1 rounded-l">-</button>
                                <span className="bg-gray-100 text-black px-2 py-1">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 text-black px-2 py-1 rounded-r">+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-2">✖</button>
                        </div>
                    ))}
                    <button onClick={() => setIsOpen(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded w-full">Cerrar</button>
                </div>
            )}
        </div>
    );
}

export default CartWidget;
