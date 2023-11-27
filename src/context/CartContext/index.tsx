import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

interface CartContextType {
  handleAddGame: (GameItem: ItemCart) => void;
  paymentInfos: PaymentInfosInterface;
  cartGames: ItemCart[];
  decrementQuantify: (gameName: string) => void;
  incrementQuantify: (gameName: string) => void;
  deleteItemCart: (gameToDelete: string) => void;
  handleAddPaymentInfo: (data: PaymentInfosInterface) => Promise<void>;
}

interface ItemCart {
  title: string;
  img: string;
  id: number;
  price?: 100;
  quantity: number;
}

interface PaymentInfosInterface {
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  number: number;
  complement?: string;
  uf: string;
  typePayment: "creditCard" | "money" | "debitCard";
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartGames, setCartGames] = useState<ItemCart[]>(() => {
    const storedGames = localStorage.getItem("@games-store");

    if (storedGames) {
      return JSON.parse(storedGames);
    } else {
      return [];
    }
  });

  const [paymentInfos, setPaymentInfos] = useState<PaymentInfosInterface>({
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    number: 0,
    complement: "",
    uf: "",
    typePayment: "money",
  });

  function handleAddGame(GameItem: ItemCart) {
    const itemExists = cartGames.some(
      (itemCart) =>
        itemCart.title.toLowerCase() === GameItem.title.toLowerCase()
    );

    if (itemExists) {
      const updatedCart = cartGames.map((itemCart) => {
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
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCartGames(newList);
  }

  function incrementQuantify(gameName: string) {
    const newList = cartGames.map((item) => {
      if (item.title === gameName) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartGames(newList);
  }

  function deleteItemCart(gameToDelete: string) {
    const listWithoutDeleteOne = cartGames.filter((item) => {
      return item.title !== gameToDelete;
    });

    setCartGames(listWithoutDeleteOne);
  }

  const handleAddPaymentInfo = useCallback(
    async (data: PaymentInfosInterface) => {
      const {
        cep,
        city,
        neighborhood,
        number,
        street,
        typePayment,
        uf,
        complement,
      } = data;

      setPaymentInfos({
        cep,
        street,
        neighborhood,
        city,
        number,
        complement,
        uf,
        typePayment,
      });
    },
    []
  );

  console.log(paymentInfos);
  useEffect(() => {
    const gamesJSON = JSON.stringify(cartGames);

    localStorage.setItem("@games-store", gamesJSON);
  }, [cartGames]);

  return (
    <CartContext.Provider
      value={{
        handleAddGame,
        cartGames,
        paymentInfos,
        incrementQuantify,
        decrementQuantify,
        deleteItemCart,
        handleAddPaymentInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
