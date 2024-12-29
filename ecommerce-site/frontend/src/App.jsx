import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import Home from './pages/Home';
import LoginSignUpPage from './pages/LoginSignUpPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Best Electronics</h1>
          <NavBar cartItems={cartItems} />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/:category" element={<CategoryPage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
            <Route path="/login" element={<LoginSignUpPage />} />
            <Route path="/signup" element={<LoginSignUpPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
