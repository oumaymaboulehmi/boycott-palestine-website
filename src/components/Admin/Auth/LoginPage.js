import '../../../Assets/css/Auth.css'; // Import the CSS file
import React, { useState, useEffect } from 'react';
import logoImage from '../../../Assets/Images/logo.png'; // Ensure you have an image at this location

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 500);
    const timer2 = setTimeout(() => setShowLogo(true), 1500);
    const timer3 = setTimeout(() => setShowForm(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Simulate a function that checks for existing usernames and emails
  const existingUsers = [
    { username: 'user1', email: 'test@example.com', password: 'Test@1234' },
    { username: 'user2', email: 'sample@example.com', password: 'Sample@1234' }
  ];

  const isExistingUser = (username) => {
    return existingUsers.some(user => user.username === username);
  };

  const isExistingEmail = (email) => {
    return existingUsers.some(user => user.email === email);
  };

  const validateUsername = () => {
    let error = '';
    if (username.trim() === '') {
      error = 'Username is required';
    } else if (isExistingUser(username)) {
      error = 'Username is already taken';
    }
    setErrors((prevErrors) => ({ ...prevErrors, username: error }));
  };

  const validateEmail = () => {
    let error = '';
    if (!/\S+@\S+\.\S+/.test(email)) {
      error = 'Invalid email address';
    } else if (!isLogin && isExistingEmail(email)) {
      error = 'Email is already registered';
    }
    setErrors((prevErrors) => ({ ...prevErrors, email: error }));
  };

  const validatePassword = () => {
    let error = '';
    if (password.length < 7) {
      error = 'Password must be at least 7 characters long';
    } else if (!/[A-Z]/.test(password)) {
      error = 'Password must include at least one uppercase letter';
    } else if (!/\d/.test(password)) {
      error = 'Password must include at least one digit';
    } else if (!/[@$!%*?&]/.test(password)) {
      error = 'Password must include at least one special character';
    }
    setErrors((prevErrors) => ({ ...prevErrors, password: error }));
  };

  const validateConfirmPassword = () => {
    let error = '';
    if (!isLogin && password !== confirmPassword) {
      error = 'Passwords do not match';
    }
    setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: error }));
  };

  const validateLoginEmail = () => {
    let error = '';
    if (!isExistingEmail(email)) {
      error = 'Email does not exist';
    }
    setErrors((prevErrors) => ({ ...prevErrors, email: error }));
  };

  const validateLoginPassword = () => {
    let error = '';
    const user = existingUsers.find(user => user.email === email);
    if (user && user.password !== password) {
      error = 'Incorrect password';
    }
    setErrors((prevErrors) => ({ ...prevErrors, password: error }));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    validateUsername();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isLogin) {
      validateLoginEmail();
    } else {
      validateEmail();
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (isLogin) {
      validateLoginPassword();
    } else {
      validatePassword();
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validateConfirmPassword();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      validateLoginEmail();
      validateLoginPassword();
      if (!errors.email && !errors.password) {
        // Submit login data
        console.log('Login successful');
      }
    } else {
      validateUsername();
      validateEmail();
      validatePassword();
      validateConfirmPassword();
      if (!errors.username && !errors.email && !errors.password && !errors.confirmPassword) {
        // Submit sign-up data
        console.log('Sign-up successful');
      }
    }
  };

  const toggleForm = () => {
    setShowForm(false);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setShowForm(true);
    }, 500); // Adjust the delay as needed
  };

  return (
    <div className="app-container">
      <div className={`content-wrapper ${showText ? 'active' : ''}`}>
        <div className={`form-wrapper ${showLogo ? 'active' : ''}`}>
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <div className="info-section">
          <h1>Support Palestine. Boycott Israel.</h1>
          <p>
            From the river to the sea, Palestine will be "FREE".
            <br />
            By supporting Palestine and choosing to boycott Israeli products, you are taking a stand against oppression and injustice. Your everyday choices can contribute to a larger movement for freedom, dignity, and human rights for the Palestinian people.
          </p>
        </div>
      </div>
      <div className={`form-container ${showForm ? 'active' : ''}`}>
        <form onSubmit={handleSubmit}>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required={!isLogin}
          />
          {errors.username && <p className="error">{errors.username}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
          {!isLogin && (
            <>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </>
          )}
          <button className="primary" type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          <p onClick={toggleForm}>
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
