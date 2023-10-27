import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Asegúrate de importar 'useParams' para obtener el ID de la URL
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
import db from '../firebase';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { id } = useParams(); // Obtiene el ID del producto desde la URL

  useEffect(() => {
    // Función asincrónica para obtener los datos del producto desde Firebase
    const fetchProduct = async () => {
      const productRef = doc(db, 'productos', id);

      try {
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          // Obtiene los datos del producto si existe
          setProduct({ id, ...productSnapshot.data() });
        } else {
          console.error('El producto no existe');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success('Producto agregado al carrito!');
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (product) {
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-green-500 text-2xl font-bold mb-4">${product.price}</p>
            <div className="flex items-center space-x-4 mb-4">
              <button
                className="bg-orange-300 text-white p-2 rounded hover-bg-orange-600"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                className="bg-orange-300 text-white p-2 rounded hover-bg-orange-600"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-orange-300 text-white p-2 rounded hover-bg-orange-600"
              onClick={handleAddToCart}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto p-4">
        <p>Cargando producto...</p>
      </div>
    );
  }
};

export default ProductDetailPage;
