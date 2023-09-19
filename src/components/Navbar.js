import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo o nombre de la empresa */}
          <div className="text-xl font-bold">
            MiEmpresa
          </div>

          {/* Enlaces de navegación */}
          <nav className="space-x-4 flex items-center">
            <a href="#servicios" className="hover:text-gray-400">Servicios</a>
            <a href="#turnos" className="hover:text-gray-400">Turnos</a>
            <a href="#acerca-de" className="hover:text-gray-400">Acerca de</a>
            <a href="#booking" className="hover:text-gray-400">Booking</a>
            <CartWidget />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
