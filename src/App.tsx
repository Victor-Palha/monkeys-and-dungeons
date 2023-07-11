import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Theme/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>

    <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
