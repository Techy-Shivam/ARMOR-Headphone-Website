import React, { useEffect } from 'react';
import './about.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import vhArmor from '../../assets/video/vhArmor.mp4'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(".about-hero", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
    gsap.from(".about-info", {
      scrollTrigger: {
        trigger: ".about-info",
        start: "top 80%",
      },
      opacity: 0,
      y: -50,
      duration: 1,
      stagger:2,
      ease: "power2.out"
    });

    gsap.from(".about-cat-img img", {
      scrollTrigger: {
        trigger: ".about-cat-img",
        start: "top 85%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    });
    gsap.from(".about-contact", {
      scrollTrigger: {
        trigger: ".about-contact",
        start: "top 80%",
      },
      opacity: 0,
      y: 70,
      duration: 1,
      ease: "power2.out"
    });
    gsap.from(".about-faq", {
      scrollTrigger: {
        trigger: ".about-contact",
        start: "top 5%"
      },
      opacity: 0,
      y: 70,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="about-container">
      <div className="about-hero">
        <img src={assets.image_4} alt="Armor Headphones" className="about-hero-img" />
        <div className="about-hero-text">
          <p>Fall Into <span>Fashion</span></p>
          <h2><span>Redefine</span> Your Audio Look – Bold, Sleek, <span>ARMOR</span></h2>
          <button onClick={() => navigate('/products')} type="button">
            Shop Now <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      <div className="about-info">
         <video className="about-hero-video" autoPlay muted loop playsInline>
        <source src={vhArmor} type="video/mp4" /></video>
        <h2>🎧 About <span>ARMOR</span></h2>
        <p>
          Born from the creator's mind of <strong>Mythpat</strong> a.k.a <strong>Mithilesh Patankar</strong>, 
          <span> ARMOR Headphones </span> are more than just an audio device — they are an experience. 
          Built for gamers, streamers, content creators, and fans who refuse to settle for average, 
          ARMOR is a bold movement redefining the sound game.
        </p>
        <p>
          Whether you're diving into a high-stakes game, binge-watching your favorite videos, or just vibing to lo-fi beats,
          ARMOR gives you that <span>power-packed clarity</span> and <span>next-level comfort</span> you deserve.
        </p>
        <p>
          <strong>Why ARMOR?</strong> Because real creators build tools for real fans. Designed with love, tested with hustle, and worn with pride.
        </p>
      </div>

      <div className='about-cat-img'>
        <img src={assets.image_2} alt="Armor category" />
      </div>

      <div className="about-contact">
        <h2>Questions?</h2>
        <p>Send us an email</p>
        <form className="about-form">
          <div className="about-form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email *" required />
          </div>
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit">Send <i className="ri-arrow-right-line"></i></button>
        </form>
        <div className="about-faq">
  <h2>📌 Frequently Asked Questions</h2>
  <div className="faq-item">
    <h3>❓ Is the ARMOR H1 compatible with PS5/Xbox?</h3>
    <p>Yes, the ARMOR H1 is compatible with gaming consoles like PS5 and Xbox via USB or adapter.</p>
  </div>
  <div className="faq-item">
    <h3>❓ Can I use the headphones without the mic?</h3>
    <p>Absolutely! The detachable mic lets you use the headset like regular headphones when needed.</p>
  </div>
  <div className="faq-item">
    <h3>❓ How do I control the RGB lighting?</h3>
    <p>You can toggle and customize the lighting via the in-line controller built into the cable.</p>
  </div>
  <div className="faq-item">
    <h3>❓ Does it work with Mac or Linux?</h3>
    <p>Yes! The headphones support most operating systems, including macOS and Linux for basic audio and mic.</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default About;
