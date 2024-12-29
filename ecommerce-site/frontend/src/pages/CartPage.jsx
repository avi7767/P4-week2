/* eslint-disable react/prop-types */
import { useState } from 'react';
import './CartPage.css';

const CartPage = ({ cartItems }) => {
  const [showModal, setShowModal] = useState(false);

  // Function to handle the buy action
  const handleBuy = () => {
    setShowModal(true); // Show the modal when the buy button is clicked
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.imgSrc || item.image}  // Use 'imgSrc' if available, else 'image'
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Buy Now Button */}
          <button onClick={handleBuy} className="buy-button">
            Buy Now
          </button>

          {/* Modal for purchase confirmation */}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <p>Items purchased successfully!</p>
                <button onClick={closeModal} className="close-btn">Close</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
