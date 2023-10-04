import products from './products.json';

export const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000); // Simula un retraso de 1 segundo
    });
};

export const fetchProductDetail = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find(p => p.id === id);
        if (product) {
          resolve(product);
        } else {
          reject('Producto no encontrado');
        }
      }, 900); // Simula un retraso de 1 segundo
    });
};
