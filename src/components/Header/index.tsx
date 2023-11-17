import { ContainerHeader } from "./styles";
import logoSteam from "../../assents/steam-logo.svg";
import profileIcon from "../../assents/logos/profileIcon.jpg";
import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
  const { cartGames } = useContext(CartContext);

  return (
    <ContainerHeader cartItemCount={cartGames.length}>
      <section>
        <Link to={"/"}>
          <img src={logoSteam} alt="" />
        </Link>
      </section>

      <section>
        <div className="button-carrinho">
          <ShoppingCart size={24} color="#fff" />
        </div>

        <div className="iconProfile">
          <img src={profileIcon} alt="icon profile" />
        </div>
      </section>
    </ContainerHeader>
  );
}
