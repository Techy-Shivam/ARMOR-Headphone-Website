import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { headphone_list } from '../../assets/assets';
import { gsap } from 'gsap';
import './product_det.css';
import Banner from '../../components/Home-Components/Banner/Banner';

const Product_Det = () => {
  const { id } = useParams();
  const product = headphone_list.find((item) => item._id.toString() === id);
  const containerRef = useRef();
  const infoRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0); 
    gsap.fromTo(containerRef.current,{ 
      opacity: 0, 
      y: 50 
      },
      { opacity: 1, y: 0, duration: 1.2 }
    );
    gsap.fromTo(
      infoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);


  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <>
    <div className="product-detail-container" ref={containerRef}>

      <div className="marquee-banner">
        <p>🔥 Flat 30% Off on ARMOR Headphones! 🔥 Limited Time Offer! 🔥 </p>
      </div>

      <div className="product-detail-card">
        <div className="product-image">
          <img src={product.image} />
        </div>

        <div className="product-info" ref={infoRef}>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>

          <div className="product-rating" title="Rated by users">
            ⭐ {product.rating} / 5
          </div>

          <div className="product-price">₹ {product.price}</div>

          <div className="button-group">
            <button className="add-btn">Add to Cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-dis">
    <Banner/>
    </div>
    </>
  );
};

export default Product_Det;
