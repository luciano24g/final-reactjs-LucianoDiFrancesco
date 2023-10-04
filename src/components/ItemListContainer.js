import React, { useState, useEffect } from 'react';
import { fetchProducts } from './asyncMock';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
    });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Producto agregado al carrito!");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded h-full flex flex-col">
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="mb-2 flex-grow">{product.description}</p>
          <p className="mb-2 text-green-500">{product.price}</p>
          <img className="mb-2 w-full h-48 object-cover" src={product.image} alt={product.name} />
          <button 
            className="bg-orange-300 text-white p-2 rounded hover:bg-orange-600 mt-auto"
            onClick={() => handleAddToCart(product)}
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;
