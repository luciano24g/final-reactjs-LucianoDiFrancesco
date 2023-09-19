import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md mt-4">
      <p className="text-center font-bold">{greeting}</p>
    </div>
  );
}

export default ItemListContainer;