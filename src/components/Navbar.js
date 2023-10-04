import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav className="bg-orange-300 p-4 text-black relative">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <Link to="/" className="text-2xl font-bold">ZapatillasCo</Link>
          </div>
          <div className="space-x-4">
            <Link to="/productos" className="hover:text-orange-500">Productos</Link>
            <Link to="/sobre-nosotros" className="hover:text-orange-500">Sobre Nosotros</Link>
            <Link to="/contactanos" className="hover:text-orange-500">Contáctanos</Link>
            <Link to="/otra-pagina" className="hover:text-orange-500">Otra Página</Link>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
