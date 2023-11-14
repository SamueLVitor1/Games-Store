import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ModalContextProvider } from "./context/ModalContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalContextProvider>
        <BrowserRouter>
        <Router />
      </BrowserRouter>
      </ModalContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
