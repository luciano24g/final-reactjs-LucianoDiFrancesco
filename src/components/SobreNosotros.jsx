import React from 'react';

function SobreNosotros() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border-2 border-orange-500">
      <h2 className="text-3xl font-semibold mb-4 text-orange-500">Sobre Nosotros</h2>
      <div className="flex-grow text-center">
        <p className="text-gray-700 text-lg mb-4 border-b-2 border-orange-300 pb-4">
          En ZapatillasShop, estamos comprometidos con brindarte la mejor experiencia en calzado deportivo.
          Con más de 10 años en el mercado, nos hemos convertido en un referente en la industria de las zapatillas de alta calidad.
        </p>
        <p className="text-gray-700 text-lg mb-4 border-b-2 border-orange-300 pb-4">
          Nuestra misión es simple pero poderosa: queremos proporcionar comodidad y estilo en cada paso que das.
          Entendemos que el calzado no solo es una necesidad, sino también una expresión de tu estilo y personalidad.
          Es por eso que nos esforzamos por ofrecer una amplia gama de zapatillas de las mejores marcas para que encuentres el par perfecto.
        </p>
        <p className="text-gray-700 text-lg mb-4 border-b-2 border-orange-300 pb-4">
          En nuestra tienda, encontrarás una selección cuidadosamente curada de zapatillas deportivas que van desde las últimas tendencias hasta los clásicos atemporales.
          Trabajamos en estrecha colaboración con los principales fabricantes de calzado para asegurarnos de que obtengas productos de alta calidad.
        </p>
        <p className="text-gray-700 text-lg">
          Gracias por elegir ZapatillasShop. Estamos aquí para ayudarte a dar lo mejor de ti en cada actividad y en cada paso que des.
        </p>
      </div>
    </div>
  );
}

export default SobreNosotros;
