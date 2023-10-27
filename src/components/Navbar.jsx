import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-orange-300 p-4 text-black relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-2xl font-bold">ZapatillasCo</Link>
          </div>
          <div className="lg:flex space-x-4">
            <div
              className={`relative group lg:relative lg:hover:text-orange-500 cursor-pointer ${
                showMenu ? 'lg:text-orange-500' : ''
              }`}
              onClick={toggleMenu}
            >
              Productos
              {showMenu && (
                <div className="lg:absolute top-12 left-0 z-10 bg-white shadow-md">
                  <Link
                    to="/productos/zapatilla"
                    className="block py-2 px-4 hover:bg-gray-100"
                  >
                    Zapatillas
                  </Link>
                  <Link
                    to="/productos/remeras"
                    className="block py-2 px-4 hover:bg-gray-100"
                  >
                    Remeras
                  </Link>
                  <Link
                    to="/productos/buzo"
                    className="block py-2 px-4 hover:bg-gray-100"
                  >
                    Buzos
                  </Link>
                  <Link
                    to="/productos/accesorios"
                    className="block py-2 px-4 hover:bg-gray-100"
                  >
                    Accesorios
                  </Link>
                </div>
              )}
            </div>
            <Link to="/sobre-nosotros" className="hover:text-orange-500">Sobre Nosotros</Link>
            <Link to="/contactanos" className="hover:text-orange-500">Contáctanos</Link>
            <Link to="/otra-página" className="hover:text-orange-500">Otra Página</Link>
          </div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
