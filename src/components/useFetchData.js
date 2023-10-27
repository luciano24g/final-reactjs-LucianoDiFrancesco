import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from './firebase'; // Asegúrate de usar la ruta correcta a tu archivo firebase.js

const fetchProducts = async () => {
  const db = getFirestore(firebaseApp);
  const productsRef = collection(db, 'productos'); // Cambia 'productos' al nombre de tu colección

  try {
    const querySnapshot = await getDocs(productsRef);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error('Error obteniendo productos:', error);
    return [];
  }
};

export { fetchProducts };

