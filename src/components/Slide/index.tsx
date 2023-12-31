import { useContext, useEffect, useState } from "react";
import { gamesSlides } from "../../data/gamesSlides";
import "./Carrousel.css";
import { ModalContext } from "../../context/ModalContext";
import { ModalGame } from "../Modal";


export const Slide = () => {

  const {
    isModalOpen,
    gameDate,
    handleCloseModal,
    handleOpenModal,
    setGamesDate,
  } = useContext(ModalContext);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setTimeout(() => {
      setSlide((prevSlide) =>
        prevSlide === gamesSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 6000);

    return () => clearTimeout(slideTimer);
  }, [slide]);

  const handleIndicatorClick = (index: number) => {
    setSlide(index);
  };

  return (
    <>
      <div className="carousel">
        {gamesSlides.map((item, index) => {
          return (
            <div key={item.title}>
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
                  {item.text}
                </p>

                <button onClick={()=>{
                  setGamesDate(item)
                  handleOpenModal();              
                }}>compre agora</button>
              </div>
            </div>
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
                  handleIndicatorClick(index);
                }}
              ></button>
            );
          })}
        </span>
      </div>

      <ModalGame
        isOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        gameDados={gameDate}
      />
    </>
  );
};
