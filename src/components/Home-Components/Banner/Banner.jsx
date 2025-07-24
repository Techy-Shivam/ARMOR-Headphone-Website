import React, { useEffect, useRef, useState } from 'react';
import './banner.css';

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState(getInitialTime());

  function getInitialTime() {
    const endTime = new Date().getTime() + 3600 * 1000; // 1 hour countdown
    return endTime - new Date().getTime();
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };


  return (
    <div className="promo-banner">
      <div className="promo-content">
        <h2>🔥 Flat 20% OFF on First Order</h2>
        <p>🎧 Free Carry Case with Every Purchase</p>
        <div className="countdown-timer">⏳ Offer Ends In: <span>{formatTime(timeLeft)}</span></div>
      </div>
    </div>
  );
};

export default Banner;
