import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Contactanos from './components/Contactanos';
import SobreNosotros from './components/SobreNosotros';
import Home from './components/Home';
import { CartProvider } from './components/CartContext';
import ProductDetailPage from './components/ProductDetailPage';
import Cart, {cart} from './components/cart';
import Footer from './components/Footer';



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/zapatilla" element={<ItemListContainer type="zapatilla" />} />
          <Route path="/productos/remeras" element={<ItemListContainer type="remeras" />} />
          <Route path="/productos/buzo" element={<ItemListContainer type="buzo" />} />
          <Route path="/productos/accesorios" element={<ItemListContainer type="accesorios" />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/producto/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/OrderForm" element={<OrderForm />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </CartProvider>
    </Router>
  );
}

export default App;
