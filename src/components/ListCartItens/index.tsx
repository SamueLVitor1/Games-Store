import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



export function ListCartItens(){

  const { cartGames } = useContext(CartContext);

  return(
    <ul>
            {cartGames.length === 0 && <p>Nenhum Jogo Escolhido</p>}
            {cartGames.map(game =>{
              return(
                <li key={game.title}>
                  <img src={game.img} alt={game.title} />
                  <div>

                  </div>
                </li>
              )
            })}
          </ul>
  )
}