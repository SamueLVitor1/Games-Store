import { ContainerHeader } from "./styles";
import logoSteam from "../../assents/steam-logo.svg";
import profileIcon from "../../assents/logos/profileIcon.jpg";

export function Header() {
  return (
    <ContainerHeader>
      <section>
        <img src={logoSteam} alt="" />
      </section>

      <section>
        <a href="">carrinho</a>

        <img src={profileIcon} alt="icon profile" width={40} />
      </section>
    </ContainerHeader>
  );
}
