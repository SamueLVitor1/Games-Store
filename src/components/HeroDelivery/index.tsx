import { DeliveyContainer, IconPD } from "./styles";
import imgDelivery from "../../assents/logos/delivery.png";
import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";

export function HeroDelivery() {
  return (
    <DeliveyContainer>
      <section>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o pedido chegará até você 😉🎮</p>
        </header>

        <main>
          <div>
            <IconPD iconName="MapPin">
              <MapPin width={16} color="#fff" weight="fill" />
            </IconPD>
            <p>
              Entrega em <span> Rua João Daniel Martinelli, 102 </span> Farrapos
              - Porto Alegre, RS
            </p>
          </div>

          <div>
            <IconPD iconName="Timer">
              <Timer width={16} color="#fff" weight="fill" />
            </IconPD>
            <p>Previsão de entrega 20 min - 30 min</p>
          </div>

          <div>
            <IconPD iconName="CurrencyDollarSimple">
              <CurrencyDollarSimple width={16} color="#fff" weight="regular" />
            </IconPD>
            <p>
              Pagamento na entrega:
              <span> Cartão de Crédito</span>
            </p>
          </div>
        </main>
      </section>

      <img src={imgDelivery} alt="" />
    </DeliveyContainer>
  );
}
