import ReactModal from "react-modal";
import Modal from "react-modal";
import { Container } from "./styles";
import { X } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

interface ModalGameProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  gameDados: any;
}

Modal.setAppElement("#root");

export function ModalGame({
  isOpen,
  handleCloseModal,
  gameDados,
}: ModalGameProps) {
  const { handleAddGame } = useContext(CartContext);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <X
          size={24}
          onClick={() => handleCloseModal()}
          weight="bold"
          className="closeButton"
        />

        <img src={gameDados && gameDados.imgFull} alt="call of duty" />

        <section>
          <header>
            <h2>{gameDados && gameDados.title}</h2>
          </header>

          <main>
            <p>
             {gameDados && gameDados.text}
            </p>
          </main>

          <footer>
            <h3>R$100,00</h3>

            <button
              className="svg-wrapper"
              onClick={() => {
                handleAddGame(gameDados);
                console.log(gameDados)
              }}
            >
              <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  fill="white"
                  dy=".3em"
                >
                  ADICIONAR NO CARRINHO
                </text>
              </svg>
            </button>
          </footer>
        </section>
      </Container>
    </ReactModal>
  );
}
