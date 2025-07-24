import React, { useContext, useState, useEffect, useRef } from 'react';
import './product.css';
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory';
import HeadphoneCard from '../../components/HeadphoneCard/HeadphoneCard';
import { StoreContext } from '../../Context/StoreContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const { headphone_list } = useContext(StoreContext);
  const [category, setcategory] = useState('All');

  const headingRef = useRef();
  const productRef = useRef();
  const categoryRef = useRef();
  const cardRef = useRef([]);
  cardRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardRef.current.includes(el)) {
      cardRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 90%',
      },
    });

    gsap.from(categoryRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: categoryRef.current,
        start: 'top 90%',
      },
    });
    
    gsap.from(cardRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.head-show-list',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <>
      <div className="product-section" ref={productRef}></div>

      <h1 className='heading' ref={headingRef}>Products</h1>

      <div className="category" ref={categoryRef}>
        <ExploreCategory category={category} setcategory={setcategory} />
      </div>

      <div className='headphone-display'>
        <div className='head-show-list'>
          {headphone_list.map((item) => {
            if (category === 'All' || category === item.category) {
              return (
                <div
                  className='headphone-card'
                  key={item._id}
                  ref={addToRefs}
                >
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
    </>
  );
};

export default Product;
