import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ListContainer } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

export function ListCartItens() {
  const { cartGames, decrementQuantify, incrementQuantify, deleteItemCart } =
    useContext(CartContext);
  const inicialValue: number = 0;
  
  return (
    <ListContainer>
      {cartGames.length === 0 && (
        <p style={{ opacity: 0.89, margin: "0 auto" }}>Nenhum Jogo Escolhido</p>
      )}
      {cartGames.map((game) => {
        return (
          <li key={game.title}>
            <img src={game.img} alt={game.title} />

            <div>
              <header>
                <p>{game.title}</p>
                <span>R${game.price},00</span>
              </header>

              <main>
                <button
                  onClick={() => {
                    decrementQuantify(game.title);
                    if (game.quantity === 1) {
                      deleteItemCart(game.title);
                    }
                  }}
                >
                  <Minus size={20} />
                </button>
                <span>{game.quantity}</span>
                <button onClick={() => incrementQuantify(game.title)}>
                  <Plus size={20} />
                </button>
              </main>
            </div>
          </li>
        );
      })}

      <footer>
        <p>Taxa de entrega: R$12,00</p>

        <div>
          <p>Total:</p>
          <span>
            R$&nbsp;
            {cartGames
              .reduce((acc, item) => {
                return 12 + (acc + 100 * item.quantity);
              }, inicialValue)
              .toFixed(2)}
          </span>
        </div>
      </footer>
    </ListContainer>
  );
}
