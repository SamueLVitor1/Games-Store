import { ListCartItens } from "../../components/ListCartItens";
import { PaymentContainer } from "./styles";

export function Payment() {

  return (
    <PaymentContainer>
      <section>
        <h2>Complete seu pedido</h2>
      </section>

      <section>
        <h2>Jogos selecionados</h2>

        <main>
          <ListCartItens/>
        </main>
      </section>
    </PaymentContainer>
  );
}
