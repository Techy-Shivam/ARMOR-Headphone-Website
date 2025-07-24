import React from 'react';
import './error.css'; 

const Error = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default Error;
