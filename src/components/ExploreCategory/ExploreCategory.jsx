import React, { useEffect, useRef } from 'react'
import { Category_List } from '../../assets/assets'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './explore.css'

gsap.registerPlugin(ScrollTrigger)

const ExploreCategory = ({ category, setcategory }) => {
  const exploreRef = useRef(null)
  const listRef = useRef([]) 

  useEffect(() => {
    gsap.context(() => {
      gsap.from(".explore-category h1, .explore-category-text", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: exploreRef.current,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
      })
      gsap.from(listRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: exploreRef.current,
          start: "top 75%",
          toggleActions: "restart none none reverse",
        },
      })
    },)
  }, [])

  return (
    <div className="explore-category" id="explore-category" ref={exploreRef}>
      <h1>Explore our collections</h1>
      <p className='explore-category-text'>
        Explore our exclusive collection of high-performance headphones designed for immersive sound, comfort, and style — crafted to elevate your experience.
        Whether you're gaming, working, or relaxing, experience sound like never before with headphones that redefine clarity.
      </p>

      <div className="explore-category-list">
        {Category_List.map((item, index) => (
          <div
            onClick={() =>
              setcategory((prev) =>
                prev === item.category_name ? 'All' : item.category_name
              )
            }
            key={index}
            className='explore-category-list-item'
            ref={(el) => (listRef.current[index] = el)}>
            <img
              className={category === item.category_name ? 'active' : ''}
              src={item.category_image}
              alt=""
            />
            <p>{item.category_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreCategory
