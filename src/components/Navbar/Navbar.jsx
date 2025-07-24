import React, { useEffect, useRef, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = ({setshowAuth}) => {
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const rightIconsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const navigate=useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  navLinksRef.current = [];

  const addToNavLinksRef = (el) => {
    if (el && !navLinksRef.current.includes(el)) {
      navLinksRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'circ.out' } });

    tl.from(logoRef.current, {
      opacity: 0,
      y: -80,
      duration: 0.5,
    });

    tl.from(navLinksRef.current, {
      opacity: 0,
      y: -50,
      stagger: 0.15,
      duration: 0.3,
    });

    tl.from(rightIconsRef.current, {
      opacity: 0,
      y: -50,
      stagger: 0.2,
      duration: 0.4,
    }, "-=0.3");
  }, []);

  return (
    <div className='navbar'>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="" className="logo" ref={logoRef} />

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} ref={mobileMenuRef}>
        <NavLink onClick={() => setMenuOpen(false)} ref={addToNavLinksRef} className={(e) => e.isActive ? "nav-link" : ""} to="/">Home</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} ref={addToNavLinksRef} className={(e) => e.isActive ? "nav-link" : ""} to="/products">Products</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} ref={addToNavLinksRef} className={(e) => e.isActive ? "nav-link" : ""} to="/contact">Contact</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} ref={addToNavLinksRef} className={(e) => e.isActive ? "nav-link" : ""} to="/about">About</NavLink>
      </ul>

      <div className="navbar-right">
        <img ref={(el) => (rightIconsRef.current[0] = el)} src={assets.search_icon} alt="" />
        <div className="nav_search_icon" ref={(el) => (rightIconsRef.current[1] = el)}>
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setshowAuth(true)} ref={(el) => (rightIconsRef.current[2] = el)}>Sign In</button>

        <i className="ri-menu-line hamburger" onClick={() => setMenuOpen(!menuOpen)}></i>
      </div>
    </div>
  );
};

export default Navbar;
