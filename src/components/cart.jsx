import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate(); // Obtiene la función de navegación

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="mb-4 p-4 border rounded-lg shadow-md flex items-center">
              <div className="w-1/4">
                <img src={product.image} alt={product.name} className="w-full h-auto" />
              </div>
              <div className="w-3/4 ml-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio unitario: ${product.price}</p>
                <p>Precio total: ${product.price * product.quantity}</p>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      const newQuantity = product.quantity - 1;
                      if (newQuantity < 1) {
                        return;
                      }
                      updateQuantity(product.id, newQuantity);
                    }}
                    className="bg-blue-500 text-white px-2 py-1 rounded-l font-bold"
                  >
                    -
                  </button>
                  <span className="bg-blue-100 text-blue-500 px-3 py-1 font-bold">{product.quantity}</span>
                  <button
                    onClick={() => {
                      const newQuantity = product.quantity + 1;
                      updateQuantity(product.id, newQuantity);
                    }}
                    className="bg-blue-500 text-white px-2 py-1 rounded-r font-bold"
                  >
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(product.id)} className="text-red-500 font-bold mt-2">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <p className="text-xl font-bold mt-4">Precio Total: ${calculateTotalPrice()}</p>
          <Link to="/OrderForm" className="bg-green-500 text-white px-4 py-2 rounded font-bold mt-4">
                Continuar la Compra
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
