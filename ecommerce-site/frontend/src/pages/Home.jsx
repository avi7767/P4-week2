import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';

// eslint-disable-next-line react/prop-types
const Home = ({ addToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of image sources for categories
  const images = [
    { src: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg', alt: 'Mobile Offers', link: '#mobiles' },
    { src: 'https://www.shopickr.com/wp-content/uploads/2017/05/flipkart-home-appliances-sale-offers.jpg', alt: 'Home Appliances Offers', link: '#home-appliances' },
    { src: 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=772,height=454,quality=75/pageimg/laptop-landing-page-772x454-1.jpg', alt: 'Laptops Offers', link: '#laptops' },
    { src: 'https://www.reliancedigital.in/medias/Samsung-Tablet-Banner-M.jpg?context=bWFzdGVyfGltYWdlc3w3OTgwOHxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaDljLzEwMTQ0MTAwOTA5MDg2LmpwZ3xkMzc5OWI5YzUwZTM0NTAxOTdhY2NiYWFjNzNiNDcyNTI1NWRhZTEwZjE0ODYwYzEzY2NhNjczYzJiODhmMmE0', alt: 'Tablets Offers', link: '#tablets' },
  ];

  // Change the current image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Example products for each category
  const products = {
    mobiles: [
      { name: 'Samsung Galaxy S23', price: '$799', imgSrc: 'https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UF1000,1000_QL80_.jpg' },
      { name: 'iPhone 14', price: '$999', imgSrc: 'https://www.maplestore.in/cdn/shop/files/iPhone_14_Plus_Starlight_PDP_Image_Position-1A__WWEN_588eff4d-7462-4c0e-8610-7b4b017e5afd.jpg?v=1701817859' },
    ],
    homeAppliances: [
      { name: 'Dyson Vacuum Cleaner', price: '$499', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKniUeoco1ryuA3DPb6cqHtUBMOK2cfR_3vg&s' },
      { name: 'Kitchen Blender', price: '$99', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDC5CK7yYFiASF6du7smIARVVRJ5XJeOLnSA&s' },
    ],
    laptops: [
      { name: 'MacBook Pro', price: '$1299', imgSrc: 'https://m.media-amazon.com/images/I/51Fh0KlZOjL._AC_UF1000,1000_QL80_.jpg' },
      { name: 'Dell XPS 13', price: '$1099', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRmHzDmFgTA5WHHGTAky87JoG90Nyg5SM-A&s' },
    ],
    tablets: [
      { name: 'iPad Pro', price: '$799', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9Dlf5Bn160qNez31QuW6gVCgELoHBeRfCg&s' },
      { name: 'Samsung Galaxy Tab', price: '$649', imgSrc: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-x926bzaains/gallery/in-galaxy-tab-s10-ultra-sm-x920-524848-sm-x926bzaains-543760149?$650_519_PNG$' },
    ],
  };

  return (
    <div className="home">
      <section className="carousel">
        <h2>🌟 Special Offers 🌟</h2>
        <div className="carousel-images">
          {images.map((image, index) => (
            <a href={image.link} key={index} className={index === currentImageIndex ? 'active' : ''}>
              <img src={image.src} alt={image.alt} />
            </a>
          ))}
        </div>
      </section>

      {/* Mobiles Section */}
      <section id="mobiles" className="featured-items">
        <h2>🌟 Mobiles Offers 🌟</h2>
        <div className="item-grid">
          {products.mobiles.map((product, index) => (
            <div key={index} className="item-card">
              <img src={product.imgSrc} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Home Appliances Section */}
      <section id="home-appliances" className="featured-items">
        <h2>🌟 Home Appliances Offers 🌟</h2>
        <div className="item-grid">
          {products.homeAppliances.map((product, index) => (
            <div key={index} className="item-card">
              <img src={product.imgSrc} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Laptops Section */}
      <section id="laptops" className="featured-items">
        <h2>🌟 Laptops Offers 🌟</h2>
        <div className="item-grid">
          {products.laptops.map((product, index) => (
            <div key={index} className="item-card">
              <img src={product.imgSrc} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Tablets Section */}
      <section id="tablets" className="featured-items">
        <h2>🌟 Tablets Offers 🌟</h2>
        <div className="item-grid">
          {products.tablets.map((product, index) => (
            <div key={index} className="item-card">
              <img src={product.imgSrc} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Cart Button */}
      <Link to="/cart" className="cart-button">
        🛒
      </Link>
    </div>
  );
};

export default Home;
