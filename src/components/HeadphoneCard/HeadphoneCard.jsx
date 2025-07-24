import React, { useContext, useState } from 'react'
import './card.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
const HeadphoneCard = ({id,name,price,rating,description,image}) => {
    const navigate=useNavigate();
    const {cartItems,addtoCart,removeFromCart}=useContext(StoreContext);

    const handleCardClick=()=>{
        navigate(`/products/${id}`)
    }   

  return (
    <div className='Headphone-item'  onClick={handleCardClick}>
         <div className="headphone-img-container">
        <img src={image} alt="" className="headphone-img" />
        {
          !cartItems[id] 
          ? <img className='add' onClick={(e) => { e.stopPropagation(); addtoCart(id); }} src={assets.add_icon_white} alt="" />
          : <div className='head-counter' onClick={(e) => e.stopPropagation()}>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addtoCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
        <div className="headphone-info">
            <div className="head-name-rating">
                <p>{name}</p>
                <div className="rating">
                <span>{rating}</span>
                <img src={assets.rating_starts} alt="" />
                </div>
            </div>
            <p className="head-desc">{description}</p>
            <p className="head-price">₹ {price}</p>
        </div>
    </div>
  )
}

export default HeadphoneCard