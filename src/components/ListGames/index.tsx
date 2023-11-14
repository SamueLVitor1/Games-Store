import { useContext } from "react";
import { gamesStore } from "../../data/gamesStore";
import { ListContainer } from "./styles";
import { ModalGame } from "../Modal";
import { ModalContext } from "../../context/ModalContext";

interface ListGamesInterface {
  isCategory: string;
}

export function ListGames({ isCategory }: ListGamesInterface) {
  const {
    isModalOpen,
    gameDate,
    handleCloseModal,
    handleOpenModal,
    setGamesDate,
  } = useContext(ModalContext);

  return (
    <>
      <ListContainer>
        {isCategory === "popular" &&
          gamesStore.map((game) => {
            if (game.popular === true) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}

        {isCategory === "todos" &&
          gamesStore.map((game) => {
            return (
              <img
                onClick={() => {
                  handleOpenModal();
                  setGamesDate(game);
                }}
                key={game.id}
                src={game.img}
                alt=""
                width={230}
              />
            );
          })}

        {isCategory === "familia" &&
          gamesStore.map((game) => {
            if (game.types.includes("familia")) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}

        {isCategory === "rpg" &&
          gamesStore.map((game) => {
            if (game.types.includes("rpg")) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}

        {isCategory === "ação" &&
          gamesStore.map((game) => {
            if (game.types.includes("ação")) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}

        {isCategory === "aventura" &&
          gamesStore.map((game) => {
            if (game.types.includes("aventura")) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}

        {isCategory === "fps" &&
          gamesStore.map((game) => {
            if (game.types.includes("fps")) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}

        {isCategory === "multijogador" &&
          gamesStore.map((game) => {
            if (game.types.includes("multijogador")) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}

        {isCategory === "herois" &&
          gamesStore.map((game) => {
            if (game.types.includes("herois")) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}

        {isCategory === "esporte" &&
          gamesStore.map((game) => {
            if (game.types.includes("esporte")) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}

        {isCategory === "terror" &&
          gamesStore.map((game) => {
            if (game.types.includes("terror")) {
              return (
                <img
                  onClick={() => {
                    handleOpenModal();
                    setGamesDate(game);
                  }}
                  key={game.id}
                  src={game.img}
                  alt=""
                  width={230}
                />
              );
            }
          })}
      </ListContainer>

      <ModalGame
        isOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        gameDados={gameDate}
      />
    </>
  );
}
