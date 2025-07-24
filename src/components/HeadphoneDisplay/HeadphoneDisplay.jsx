import React, { useContext, useEffect, useRef } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import './headphone.css';
import HeadphoneCard from '../HeadphoneCard/HeadphoneCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../../assets/assets';

gsap.registerPlugin(ScrollTrigger);

const HeadphoneDisplay = ({ category }) => {
  const { headphone_list } = useContext(StoreContext);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.headphone-card');

    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
      opacity: 0,
      y: 50,
      duration: 0.3,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }, []);

  return (
    <>
      <div className='headphone-display' ref={containerRef}>
        <div className='head-show-list'>
          {headphone_list.map((item) => {
            if (category === 'All' || category === item.category) {
              return (
                <div className='headphone-card' key={item._id}>
                  <HeadphoneCard
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="bottom-banner">
        <img src={assets.image_3} alt="Promo Banner" className="responsive-image" />
      </div>
    </>
  );
};

export default HeadphoneDisplay;
