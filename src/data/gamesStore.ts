import elden from '../assents/gamesIMG-STORE/elden.png'
import cod from '../assents/gamesIMG-STORE/cod.jpg'
import batman from '../assents/gamesIMG-STORE/batman.png'
import fifa from '../assents/gamesIMG-STORE/fifa.jpg'
import forza from '../assents/gamesIMG-STORE/forza.png'
import gta from '../assents/gamesIMG-STORE/gta5.jpg'
import minecraft from '../assents/gamesIMG-STORE/minecraft.jpg'
import nba from '../assents/gamesIMG-STORE/nba.jpg'
import overcooked from '../assents/gamesIMG-STORE/overcoked.png'
import rdr2 from '../assents/gamesIMG-STORE/rdr2.png'
import resident from '../assents/gamesIMG-STORE/resident.png'
import sims from '../assents/gamesIMG-STORE/sims.png'
import spider from '../assents/gamesIMG-STORE/spider.jpg'
//import   from '../assents/gamesIMG-STORE/'
import codFull from '../assents/gamesIMG-STORE/codFULL.jpg'
import eldenFull from '../assents/gamesIMG-STORE/eldenFull.jpeg'
import batmanFull from '../assents/gamesIMG-STORE/batmanFull.jpg'
import fifaFull from '../assents/gamesIMG-STORE/fifaFull.jpeg'
import forzaFull from '../assents/gamesIMG-STORE/forzaFull.jpg'
import gtaFull from '../assents/gamesIMG-STORE/gtaFull.jpg'
import minecraftFull from '../assents/gamesIMG-STORE/minecraftFull.jpg'
import nbaFull from '../assents/gamesIMG-STORE/nbaFull.jpg'
import simsFull from '../assents/gamesIMG-STORE/simsFull.png'
import residentFull from '../assents/gamesIMG-STORE/residentFull.jpeg'
import overcookedFull from '../assents/gamesIMG-STORE/overcookedFull.png'
import rdrFull from '../assents/gamesIMG-STORE/rdrFull.png'
import spiderFull from '../assents/gamesIMG-STORE/spiderFull.jpg'

export interface GamesInterface {
  id: number,
  title: string,
  types: string[],
  img: string,
  price: number,
  popular?: boolean,
  imgFull?: string,
  text: String
}

export const gamesStore: GamesInterface[] = [
  {
    id: 1,
    title: "Elden ring",
    types: ["rpg", "aventura"],
    img: elden,
    price: 100,
    popular: true,
    imgFull: eldenFull,
    text: "O NOVO RPG DE AÇÃO E FANTASIA. Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias."
  },
  {
    id: 2,
    title: "Call Of Duty",
    types: ["fps", "multijogador"],
    img: cod,
    price: 100,
    popular: true,
    imgFull: codFull,
    text: "Experimente uma Campanha visceral ou monte sua equipe em uma derradeira experiência online com diversos desafios de Operações Especiais e uma mistura de mapas e modos Multijogador."
  },
  {
    id: 3,
    title: "Batman: Arkham City ",
    types: ["ação", "herois"],
    img: batman,
    price: 100,
    imgFull: batmanFull,
    text: "Batman: Arkham City expande a história atmosférica e intensa de Batman: Arkham Asylum, colocando jogadores na expansiva Arkham City, cinco vezes maior que o espaço jogável em Batman: Arkham Asylum – o novo lar de segurança máxima para todos os bandidos, gângsteres e mentes criminosas insanas de Gotham City."
  },
  {
    id: 4,
    title: "Fifa 22",
    types: ["esporte", "multijogador"],
    img: fifa,
    price: 100,
    imgFull: fifaFull,
    text: "FIFA 22 traz a tecnologia HyperMotion para o PC pela primeira vez, com o dobro de capturas de movimentos do mundo real, deixando as partidas ainda mais reais. A HyperMotion2 desbloqueia novos recursos e dá ao FIFA 22 mais de 6.000 animações verdadeiras, obtidas por meio de milhões de frames de captura avançada de partida 11x11. "
  },
  {
    id: 5,
    title: "Forza Horizon 4",
    types: ["corrida", "esporte", "familia"],
    img: forza,
    price: 100, 
    imgFull: forzaFull,
    text: "Estações dinâmicas mudam tudo no maior festival automotivo do mundo. Participe sozinho ou junte os amigos para explorar a linda e histórica Grã-Bretanha num mundo aberto compartilhado."
  },
  {
    id: 6,
    title: "Grand Theft Auto V",
    types: ["ação", "aventura"],
    img: gta,
    price: 100,
    popular: true,
    imgFull: gtaFull,
    text: "Dinheiro é o que importa nesta cidade. Resolva os seus problemas financeiros e consiga o que você quiser em Los Santos e Blaine County com a compra de pacotes de dinheiro para o Grand Theft Auto Online. Todo o dinheiro comprado é automaticamente depositado na conta do seu personagem. "
  },
  {
    id: 7,
    title: "Minecraft",
    types: ["aventura", "familia"],
    img: minecraft,
    price: 100,
    popular: true,
    imgFull: minecraftFull,
    text: "Explore mundos gerados aleatoriamente e construa das casas mais simples aos maiores castelos. Jogue no modo criativo com recursos ilimitados, ou minere as profundezas do mundo no modo sobrevivência, criando armas e armaduras para se defender das criaturas."
  },
  {
    id: 8,
    title: "NBA 2K23",
    types: ["esporte", "multijogador"],
    img: nba,
    price: 100,
    imgFull: nbaFull,
    text: "Mostre que você está à altura deste momento no NBA 2K23. Mostre seu talento no MyCAREER. Una os All-Stars com as lendas atemporais no MyTEAM. Construa a sua própria dinastia no MyGM ou leve a NBA a uma nova direção no MyLEAGUE"
  },
  {
    id: 9,
    title: "Overcooked! 2",
    types: ["familia", "multijogador"],
    img: overcooked,
    price: 100,
    imgFull: overcookedFull,
    text: "O Overcooked voltou trazendo mais caos para a cozinha! Volte para o Reino da Cebola e monte sua equipe de chefs em um jogo cooperativo local ou on-line para até quatro jogadores. Segurem seus aventais ... chegou a hora de salvar o mundo (de novo!)"
  },
  {
    id: 10,
    title: "Red Dead Redemption 2",
    types: ["ação", "aventura"],
    img: rdr2,
    price: 100,
    imgFull: rdrFull,
    text: "Vencedor de mais de 175 prêmios de Jogo do Ano e avaliado com mais de 250 notas máximas, Red Dead Redemption 2 é uma história épica de honra e lealdade no alvorecer dos tempos modernos. Inclui Red Dead Redemption 2: Modo História e Red Dead Online."
  },
  {
    id: 11,
    title: "Resident Evil 4",
    types: ["terror", "ação"],
    img: resident,
    price: 100,
    imgFull: residentFull,
    text: "Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes."
  },
  {
    id: 12,
    title: "The Sims™ 4",
    types: ["aventura", "familia"],
    img: sims,
    price: 100,
    imgFull: simsFull,
    text: "Curta o poder de criar e controlar pessoas num mundo virtual onde não há regras. Seja poderoso e livre, divirta-se e jogue com a vida!"
  },
  {
    id: 13,
    title: "Marvel Spider-Man Remastered",
    types: ["ação", "herois"],
    img: spider,
    price: 100,
    imgFull: spiderFull,
    text: "Em Marvel's Spider-Man Remasterizado, os mundos de Peter Parker e Spider-Man entram em conflito em uma história original cheia de ação. Jogue como um Peter Parker experiente que combate as maiores ameaças do crime e vilões icônicos na Nova York da Marvel."
  },
]