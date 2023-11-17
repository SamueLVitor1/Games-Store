import { ReactNode, createContext, useState } from "react";

interface CartContextType {
  handleAddGame: (GameItem: ItemCart) => void;
  cartGames: ItemCart[],
}

interface Cart {}

interface ItemCart {
  title: string;
  img: string;
  id: number;
  price?: 100;
  quantity: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartGames, setCartGames] = useState<ItemCart[]>([]);

  function handleAddGame(GameItem: ItemCart) {
    const itemExists = cartGames.some(itemCart => 
      itemCart.title.toLowerCase() === GameItem.title.toLowerCase()
    );
  
    console.log(itemExists);
  
    if (itemExists) {
      const updatedCart = cartGames.map(itemCart => {
        if (itemCart.title.toLowerCase() === GameItem.title.toLowerCase()) {
          return {
            ...itemCart,
            quantity: itemCart.quantity + 1,
          };
        }
        return itemCart;
      });
  
      setCartGames(updatedCart);
    } else {
      setCartGames([
        ...cartGames,
        {
          title: GameItem.title,
          img: GameItem.img,
          id: GameItem.id,
          price: 100,
          quantity: 1,
        },
      ]);
    }
  }

  function decrementQuantify(gameName: string) {
    const newList = cartGames.map((item) => {
      if (item.title === gameName && item.quantity > 1) {
        return {
          ...item,
          quantityCoffee: item.quantity - 1,
        };
      }
      return item;
    });
    setCartGames(newList);
  }

  console.log(cartGames)
  
  return(
  <CartContext.Provider value={{
    handleAddGame,
    cartGames,
  }}>
    {children}
    </CartContext.Provider>)
}
