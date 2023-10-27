import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase';

const OrderFormContainer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'ordenes'), formData);
      const orderNumber = docRef.id;
      toast.success(`¡Compra exitosa! Número de orden: ${orderNumber}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.error('Error al guardar la orden en Firestore:', error);
      toast.error('Hubo un error al procesar la orden', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Completa tus datos</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Número de teléfono:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded font-bold">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default OrderFormContainer;
