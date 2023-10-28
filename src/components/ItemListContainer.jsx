import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { collection, getDocs } from 'firebase/firestore';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
import db from '../firebase';

const ItemListContainer = ({ type }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  // Ajusta la altura de las tarjetas según el tipo
  const cardHeight = type === 'zapatillas' ? 'h-48' : 'h-64';

  useEffect(() => {
    const fetchFirebaseProducts = async () => {
      const productsRef = collection(db, 'productos');

      try {
        const querySnapshot = await getDocs(productsRef);
        const productsData = [];

        querySnapshot.forEach((doc) => {
          const product = { id: doc.id, ...doc.data() };
          if (type === 'todos' || product.type === type) {
            productsData.push(product);
          }
        });

        setProducts(productsData);
      } catch (error) {
        console.error('Error getting products:', error);
      }
    };

    fetchFirebaseProducts();
  }, [type]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Producto agregado al carrito!');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className={`border p-4 rounded h-full flex flex-col ${cardHeight}`}>
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="mb-2 flex-grow text-center"> { /* Aplica text-center para centrar el contenido horizontalmente */ }
            {product.description}
          </p>
          <p className="mb-2 text-green-500">${product.price}</p>
          <img className={`mb-2 w-full object-cover ${cardHeight}`} src={product.image} alt={product.name} />
          <Link to={`/producto/${product.id}`} className="bg-orange-300 text-white text-center p-2 rounded hover:bg-orange-600 mt-2">
            Detalle
          </Link>
          <button
            className="bg-orange-300 text-white p-2 rounded hover:bg-orange-600 mt-2"
            onClick={() => handleAddToCart(product)}
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
