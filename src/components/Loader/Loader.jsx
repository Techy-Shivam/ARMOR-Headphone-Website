import React, { useEffect, useState } from 'react';
import './loader.css';
import loading_hand from '../../assets/animation/loading_hand.json'
import Lottie from 'lottie-react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
  }, []);

  return (
    <div className="loader-container">
      <Lottie
        animationData={loading_hand}
        loop={true}
        style={{ width: 200, height: 200 }}
      />
      <div className="loading-text">
        <p>🎧 Powering Up ARMOR Sound... {progress}% 🔊</p>
      </div>
    </div>
  );
};

export default Loader;
