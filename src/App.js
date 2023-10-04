import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Contactanos from './components/Contactanos';
import SobreNosotros from './components/SobreNosotros';
import Home from './components/Home';
import { CartProvider } from './components/CartContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
        <ToastContainer />
      </CartProvider>
    </Router>
  );
}

export default App;