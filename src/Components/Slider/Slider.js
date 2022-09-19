import React, { useState, useEffect } from "react";
import { sliderData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  return (
    <div className="slider">
      {sliderData.map(({ image, heading }, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <h3>{heading}</h3>
              </>
            )}
          </div>
        );
      })}

      <FaArrowAltCircleLeft className="arrow prev" onClick={prevSlide} />
      <FaArrowAltCircleRight className="arrow next" onClick={nextSlide} />
    </div>
  );
};

export default Slider;
