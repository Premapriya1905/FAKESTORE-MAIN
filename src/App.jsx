import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductListing from './components/ProductListing';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Banner />
            <ProductListing />
          </>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductListing />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
  