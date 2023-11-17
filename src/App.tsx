import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ModalContextProvider } from "./context/ModalContext";
import { CartContextProvider } from "./context/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <ModalContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ModalContextProvider>
      </CartContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
