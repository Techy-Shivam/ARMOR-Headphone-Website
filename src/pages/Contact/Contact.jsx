import React, { useEffect } from 'react';
import { assets } from '../../assets/assets';
import './contact.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.from(".first-section img", {
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".first-section-txt", {
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 80%",
      },
      opacity: 0,
      x: -50,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(".second-section .info-box", {
      scrollTrigger: {
        trigger: ".second-section",
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.4)",
    });

    gsap.from(".third-section h2, .third-section p", {
      scrollTrigger: {
        trigger: ".third-section",
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
    });

    gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
      scrollTrigger: {
        trigger: ".third-section",
        start: "top 95%",
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="contact-section">
      <div className="first-section">
        <img src={assets.image_4} alt="Armor Headphones" className="contact-image" />
        <div className="first-section-txt">
          <p>Sonic Sophistication, Contemporary Vibes</p>
          <h2><span>Experience</span> Audio Mastery Blended with <span>Modern</span> Design</h2>
          <p>
            Step into a world where style meets sound. From everyday essentials to iconic head-turners,
            discover headphones that elevate every moment with modern elegance.
          </p>
        </div>
      </div>

      <div className="second-section">
        <div className="info-box">
          <i className="ri-map-pin-line"></i>
          <h3>Address</h3>
          <p>Gujrat, West India 5732, India.</p>
        </div>
        <div className="info-box">
          <i className="ri-phone-line"></i>
          <h3>Call Us</h3>
          <p>+ (02) 6171 3859<br />+ (07) 4088 1324</p>
        </div>
        <div className="info-box">
          <i className="ri-time-line"></i>
          <h3>Open</h3>
          <p>Mon - Fri: 8am - 4pm<br />Sat - Sun: 9am - 5pm</p>
        </div>
        <div className="info-box">
          <i className="ri-mail-line"></i>
          <h3>Emails</h3>
          <p>contact@armor.com<br />contact@armor.com</p>
        </div>
      </div>

      <div className="third-section">
        <h2>Got Any Questions?</h2>
        <p>Use the form below to get in touch with the sales team</p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email *" required />
          </div>
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit">Send <i className="ri-arrow-right-line"></i></button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
