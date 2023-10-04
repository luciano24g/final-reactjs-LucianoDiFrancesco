import { useState, useEffect } from 'react';
import { fetchProducts } from './asyncMock'; // Asegúrate de tener esta función importada

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Carrusel de productos */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        {products.slice(0, 4).map(product => (
          <div key={product.id} className="relative group">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform transform group-hover:scale-105" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white">{product.name}</h3>
              <p className="text-white mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de productos destacados */}
      <h2 className="text-2xl font-bold mb-4">Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(4, 7).map(product => (
          <div key={product.id} className="relative group">
            <img src={product.image} alt={product.name} className="w-2/3 mx-auto h-72 object-cover transition-transform transform group-hover:scale-105" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold text-white">{product.name}</h3>
              <p className="text-white mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sección "Sobre nosotros" */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
        <p className="text-lg">Somos una tienda privada especializada en zapatillas de alta calidad. Nuestra misión es ofrecer a nuestros clientes los mejores productos y un servicio excepcional.</p>
      </div>
    </div>
  );
}

export default Home;