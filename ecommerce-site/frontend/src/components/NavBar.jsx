/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ cartItems }) => {
  const categories = [
    { name: 'Mobiles', path: 'mobiles' },
    { name: 'Laptops & Tablets', path: 'laptops & tablets' },
    { name: 'Televisions', path: 'televisions' },
    { name: 'Home Appliances', path: 'home-appliances' },
    { name: 'Kitchen Appliances', path: 'kitchen-appliances' },
    { name: 'Audio & Video', path: 'audio-video' },
    { name: 'Personal Care', path: 'personal-care' }
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <div className={`nav-links ${showMobileMenu ? 'active' : ''}`}>
        {categories.map((category) => (
          <Link key={category.path} to={`/${category.path}`} className="nav-link">
            {category.name}
          </Link>
        ))}
        <Link to="/cart" className="nav-link">
          Cart ({cartItems.length})
        </Link>

        {/* Only Login button */}
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <span className="mobile-menu-icon"></span>
      </button>
    </nav>
  );
};

export default NavBar;
