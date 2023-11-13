import { useEffect, useState } from "react";
import { gamesSlides } from "../../data/gamesSlides";

import "./Carrousel.css";
import React from "react";

export const Slide = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {

    const slideTimer = setTimeout(() => {
      setSlide((prevSlide) =>
        prevSlide === gamesSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    
    return () => clearTimeout(slideTimer);
  }, [slide]);
  
  const handleIndicatorClick = (index: number) => {
    setSlide(index);
  };

  return (
    <div className="carousel">
      {gamesSlides.map((item, index) => {
        return (
          <React.Fragment key={item.title}>
            <img
              style={{ opacity: 0.4 }}
              src={item.src}
              className={slide === index ? "slide" : "slide slide-hidden"}
            />

            <div
              className={
                slide === index ? "infoGames" : "infoGames slide-hidden"
              }
            >
              <img src={item.logo} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis unde fuga necessitatibus iste facere doloremque, ipsa
                sapiente? Cumque nesciunt odio maxime! Laborum molestias
                laudantium inventore maiores vel placeat nam laboriosam?
              </p>

              <a href="">compre agora</a>
            </div>
          </React.Fragment>
        );
      })}

      <span className="indicators">
        {gamesSlides.map((_, index) => {
          return (
            <button
              key={index}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => {
                setSlide(index);
                handleIndicatorClick (index)
              }}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
