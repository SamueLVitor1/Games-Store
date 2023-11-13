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
}

export const gamesStore: GamesInterface[] = [
  {
    id: 1,
    title: "Elden ring",
    types: ["rpg", "aventura"],
    img: elden,
    price: 100,
    popular: true,
    imgFull: eldenFull
  },
  {
    id: 2,
    title: "Call Of Duty",
    types: ["fps", "multijogador"],
    img: cod,
    price: 100,
    popular: true,
    imgFull: codFull,
  },
  {
    id: 3,
    title: "Batman: Arkham City ",
    types: ["ação", "herois"],
    img: batman,
    price: 100,
    imgFull: batmanFull
  },
  {
    id: 4,
    title: "Fifa 22",
    types: ["esporte", "multijogador"],
    img: fifa,
    price: 100,
    imgFull: fifaFull
  },
  {
    id: 5,
    title: "Forza Horizon 4",
    types: ["corrida", "esporte", "familia"],
    img: forza,
    price: 100, 
    imgFull: forzaFull
  },
  {
    id: 6,
    title: "Grand Theft Auto V",
    types: ["ação", "aventura"],
    img: gta,
    price: 100,
    popular: true,
    imgFull: gtaFull
  },
  {
    id: 7,
    title: "Minecraft",
    types: ["aventura", "familia"],
    img: minecraft,
    price: 100,
    popular: true,
    imgFull: minecraftFull
  },
  {
    id: 8,
    title: "NBA 2K23",
    types: ["esporte", "multijogador"],
    img: nba,
    price: 100,
    imgFull: nbaFull
  },
  {
    id: 9,
    title: "Overcooked! 2",
    types: ["familia", "multijogador"],
    img: overcooked,
    price: 100,
    imgFull: overcookedFull
  },
  {
    id: 10,
    title: "Red Dead Redemption 2",
    types: ["ação", "aventura"],
    img: rdr2,
    price: 100,
    imgFull: rdrFull
  },
  {
    id: 11,
    title: "Resident Evil 4",
    types: ["terror", "ação"],
    img: resident,
    price: 100,
    imgFull: residentFull
  },
  {
    id: 12,
    title: "The Sims™ 4",
    types: ["aventura", "familia"],
    img: sims,
    price: 100,
    imgFull: simsFull
  },
  {
    id: 13,
    title: "Marvel Spider-Man Remastered",
    types: ["ação", "herois"],
    img: spider,
    price: 100,
    imgFull: spiderFull
  },
]