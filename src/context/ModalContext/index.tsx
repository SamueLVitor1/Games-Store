import { ReactNode, createContext, useState } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  gameDate: {};
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  setGamesDate:any ;
}

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextType);

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [gameDate, setGamesDate] = useState({});

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        gameDate,
        handleCloseModal,
        handleOpenModal,
        setGamesDate
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
