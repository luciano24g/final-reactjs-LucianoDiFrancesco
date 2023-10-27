import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../firebase';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFirebaseProducts = async () => {
      const productsRef = collection(db, 'productos');
      const q = query(productsRef, where('type', 'in', ['zapatilla', 'buzo', 'remeras' , 'accesorios'])); // Filtra por categorías deseadas

      try {
        const querySnapshot = await getDocs(q);
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });
        setProducts(products);
      } catch (error) {
        console.error('Error getting products:', error);
      }
    };

    fetchFirebaseProducts();
  }, []);

  return (
    <div className="container mx-auto p-6 gap-5">
      <div className="grid grid-cols-1 gap-6 mb-6">
        {products.filter(product => product.type === "zapatilla").slice(0, 4).map(product => (
          <div key={product.id} className="relative group">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform transform group-hover:scale-105" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-black">{product.name}</h3>
              <p className="text-white mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-8">Ropa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {products.filter(product => product.type === "buzo" || product.type === "remeras").map(product => (
          <div key={product.id} className="relative group bg-white rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform transform group-hover:scale-105" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-700 mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-8">Accesorios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {products.filter(product => product.type === "accesorios").map(product => (
          <div key={product.id} className="relative group bg-white rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform transform group-hover:scale-105" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-700 mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
