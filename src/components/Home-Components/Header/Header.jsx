import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { corousel_img } from '../../../assets/corousel_img/c_img'
import gsap from 'gsap';

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = corousel_img.length;

    const carouselAnim = useRef(null)

    useEffect(() => {
        gsap.from(carouselAnim.current, {
            opacity: 0,
            y: -50,
            duration: 1,
            delay:1 ,
            ease: "bounce.out",
        })
    }, [])


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 3000);
        return () => clearInterval(interval);
    }, [totalSlides]);


    const goToSlide = (index) => setCurrentIndex(index);
    const prevSlide = () =>
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);

    return (
        <div ref={carouselAnim} className="carousel">
            <div className="carousel-inner">
                {corousel_img.map((slide, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? "active" : ""
                            }`}
                        key={slide.id}
                    >
                        <img src={slide.image} alt={`slide-${index}`} />
                    </div>
                ))}
                <button className="nav prev" onClick={prevSlide}>
                    ❮
                </button>
                <button className="nav next" onClick={nextSlide}>
                    ❯
                </button>
                <div className="dots">
                    {corousel_img.map((_, idx) => (
                        <span
                            key={idx}
                            className={idx === currentIndex ? "dot active" : "dot"}
                            onClick={() => goToSlide(idx)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
