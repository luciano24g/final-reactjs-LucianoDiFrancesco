function CartWidget() {
  const number = 5;

  return (
      <button className="relative p-2 bg-gray-800 rounded hover:bg-blue-600 focus:outline-none ">
          <span className="material-icons text-3xl text-white">shopping_cart</span>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-sm -mt-2 -mr-2">{number}</span>
      </button>
  );
}

export default CartWidget;
