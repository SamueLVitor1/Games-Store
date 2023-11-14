import { DeliveyContainer } from "./styles";
import imgDelivery from "../../assents/logos/delivery.png";
import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";

export function HeroDelivery() {
  return (
    <DeliveyContainer>
      
      <section>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        <main>
          <div>
            <MapPin width={30} color="#fff" weight="fill" />
            <p>
              Entrega em <span> Rua João Daniel Martinelli, 102 </span> Farrapos
              - Porto Alegre, RS
            </p>
          </div>

          <div>
            <Timer width={30} color="#fff" weight="fill" />
            <p>Previsão de entrega 20 min - 30 min</p>
          </div>

          <div>
            <CurrencyDollarSimple width={30} color="#fff" weight="regular" />
            Pagamento na entrega
            <span> Cartão de Crédito</span>
          </div>
        </main>
      </section>

      <img src={imgDelivery} alt="" />
    </DeliveyContainer>
  );
}
