import { ListGames } from "../ListGames";
import { Select } from "@chakra-ui/react";
import { HeroContainer } from "./styles";
import { useState } from "react";

export function Hero() {
  const [categorySelected, setCategorySelected] = useState("popular");
  const [searchGame, setSearchGame] = useState("");

  function handleSearchGame(textSearch: string) {
    setSearchGame(textSearch);
  }
  console.log(searchGame);

  return (
    <HeroContainer>
      <section>
        <button onClick={() => setCategorySelected("popular")}>
          populares
        </button>

        <div>
          <Select
            onChange={(e) => setCategorySelected(e.target.value)}
            icon={<></>}
            placeholder="Categorias"
            className="select"
            value="populares"
          >
            <option value="todos">todos</option>
            <option value="ação">ação</option>
            <option value="aventura">aventura</option>
            <option value="rpg">rpg</option>
            <option value="fps">fps</option>
            <option value="multijogador">multijogador</option>
            <option value="herois">herois</option>
            <option value="esporte">esporte</option>
            <option value="terror">terror</option>
            <option value="familia">familia</option>
          </Select>
        </div>
      </section>

      <input
        value={searchGame}
        type="search"
        onChange={(e) => handleSearchGame(e.target.value)}
      />

      <ListGames isCategory={categorySelected} />
    </HeroContainer>
  );
}
