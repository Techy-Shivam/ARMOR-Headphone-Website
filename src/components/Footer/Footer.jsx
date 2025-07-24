import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>ARMOR headphones are designed for those who demand powerful sound and lasting comfort. From intense gaming sessions to everyday work and workouts, our headphones deliver crisp audio, deep bass, and stylish durability — built to keep up with your rhythm.</p>
                  <div className="footer-icon">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src={assets.facebook_icon} alt="Facebook" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src={assets.twitter_icon} alt="Twitter" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src={assets.linkedin_icon} alt="LinkedIn" />
  </a>
                  </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-522-658-8950</li>
                <li>contact@armor.com</li>
            </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 © ARMOR.com - All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer