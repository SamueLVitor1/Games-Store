import { DeliveyContainer, IconPD } from "./styles";
import imgDelivery from "../../assents/logos/delivery.png";
import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function HeroDelivery() {
  const { paymentInfos } = useContext(CartContext);

  return (
    <DeliveyContainer>
      <section>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o pedido chegará até você 😉🎮</p>
        </header>

        <main>
          <div>
            <IconPD iconname="MapPin">
              <MapPin width={16} color="#fff" weight="fill" />
            </IconPD>
            <p>
              Entrega em{" "}
              <span>
                Rua {paymentInfos.street}, {paymentInfos.number}{" "}
              </span>{" "}
              {paymentInfos.neighborhood} - {paymentInfos.city},{" "}
              {paymentInfos.uf}
            </p>
          </div>

          <div>
            <IconPD iconname="Timer">
              <Timer width={16} color="#fff" weight="fill" />
            </IconPD>
            <p>
              Previsão de entrega <span> 20 min - 30 min </span>
            </p>
          </div>

          <div>
            <IconPD iconname="CurrencyDollarSimple">
              <CurrencyDollarSimple width={16} color="#fff" weight="regular" />
            </IconPD>
            <p>
              Pagamento na entrega:
              {paymentInfos.typePayment === "money" && <span> Dinheiro </span>}
              {paymentInfos.typePayment === "creditCard" && (
                <span> Cartão de crédito </span>
              )}
              {paymentInfos.typePayment === "debitCard" && (
                <span> Cartão de Débito </span>
              )}
            </p>
          </div>
        </main>
      </section>

      <img src={imgDelivery} alt="" />
    </DeliveyContainer>
  );
}
