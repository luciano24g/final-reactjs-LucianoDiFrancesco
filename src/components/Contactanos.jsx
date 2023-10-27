import React from 'react';

function Contactanos() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border-2 border-orange-500">
      <h2 className="text-3xl font-semibold mb-4 text-orange-500">Contáctanos</h2>
      <div className="text-center">
        <p className="text-gray-700 text-lg mb-4 border-b-2 border-orange-300 pb-4">
          ¿Tienes alguna pregunta o comentario sobre nuestras zapatillas? ¡Nos encantaría escuchar de ti!
        </p>
        <ul className="text-gray-700 text-lg list-disc pl-8">
          <li>Email: contacto@zapatillas.com</li>
          <li>Teléfono: +123 456 7890</li>
          <li>Dirección: Calle de las Zapatillas, 123, Ciudad del Calzado</li>
        </ul>
      </div>
    </div>
  );
}

export default Contactanos;
