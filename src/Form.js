import React, { useState } from 'react';

const LoginForm = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
      }, 3000); 
    }, 1000); 
    event.target.reset(); 
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Your Password"
          required
        />

        <button type="submit">Submit</button>
      </form>

      {loginSuccess && <p>Login successfully!</p>}
    </div>
  );
};

export default LoginForm;
