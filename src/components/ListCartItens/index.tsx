import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ListContainer } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

export function ListCartItens() {
  const { cartGames } = useContext(CartContext);
  const inicialValue: number = 0;
  return (
    <ListContainer>
      {cartGames.length === 0 && (
        <p style={{ opacity: 0.89 }}>Nenhum Jogo Escolhido</p>
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
                <div>
                  <button>
                    <Minus size={24} color="#c47f17" />
                  </button>
                  {game.quantity}
                  <button>
                    <Plus size={24} color="#c47f17" />
                  </button>
                </div>
              </main>
              
            </div>
          </li>
        );
      })}

      <p>
        <p>Total</p>
        <span>
          R$&nbsp;
          {cartGames
            .reduce((acc, item) => {
              return 3.5 + (acc + 100 * item.quantity);
            }, inicialValue)
            .toFixed(2)}
        </span>
      </p>
    </ListContainer>
  );
}
