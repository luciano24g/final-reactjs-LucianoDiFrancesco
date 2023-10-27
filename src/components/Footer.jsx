import React from 'react';
import { toast } from 'react-toastify';

const Footer = () => {
  const handleContactClick = () => {
    toast.info('¡Contáctanos para obtener más información!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <footer className="bg-orange-300 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Mi Empresa</p>
          <p className="text-gray-100">Todos los derechos reservados</p>
        </div>
        <div className="text-center">
          <button
            onClick={handleContactClick}
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 hover:text-white mr-2"
          >
            Contáctanos
          </button>
        </div>
        <div className="text-center md:text-right">
          <a href="/politica-de-privacidad" className="text-blue-500 hover:underline mr-4">
            Política de Privacidad
          </a>
          <a href="/terminos-y-condiciones" className="text-blue-500 hover:underline">
            Términos y Condiciones
          </a>
        </div>
      </div>
      <div className="text-center md:text-right mt-2">
        Síguenos en:
        <a href="https://facebook.com/miempresa" className="ml-2 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com/miempresa" className="ml-2 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://linkedin.com/company/miempresa" className="ml-2 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
