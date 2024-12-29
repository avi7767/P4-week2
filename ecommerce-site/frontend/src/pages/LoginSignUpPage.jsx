import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LoginSignUpPage.css';

const LoginSignUpPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const isLogin = location.pathname === '/login'; // Determine if it's login or signup based on the URL

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., authentication or registration)
    console.log(formData);
    navigate('/');
  };

  useEffect(() => {
    // Clear form data when switching between login/signup
    setFormData({ email: '', password: '', name: '' });
  }, [location.pathname]);

  return (
    <div className="login-signup-page">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <div className="switch-form">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button onClick={() => navigate(isLogin ? '/signup' : '/login')}>
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpPage;
