import { CartContext } from "../../context/CartContext";
import { PaymentContainer } from "./styles";
import { useContext} from 'react'

export function Payment() {

  const {cartGames} =  useContext(CartContext);

  return (
    <PaymentContainer>
      <section>
        <h2>Complete seu pedido</h2>
      </section>

      <section>
        <h2>Jogos selecionados</h2>

        <main>
          <ul>
            {cartGames.length >= 0 ? 
              <p>Nenhum Jogo Escolhido</p> :   
              null
            }
            
          </ul>
        </main>
      </section>
    </PaymentContainer>
  );
}
