import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { HomePage, CoinPage, Portfolio } from "./pages";
import { darkTheme, lightTheme } from "./components/Theme/Theme";
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background-color: ${(props) => props.theme.main};
    font-family: 'Poppins', sans-serif;
  }
  *{
    box-sizing: border-box;
  }
`;
export const currencies = {
  usd: {
    value: "usd",
    symbol: "$",
  },
  gbp: {
    value: "gbp",
    symbol: "£",
  },
  eur: {
    value: "eur",
    symbol: "€",
  },
  btc: {
    value: "btc",
    symbol: "₿",
  },
  eth: {
    value: "eth",
    symbol: "Ξ",
  },
};

function useLocalState(key, initialValue) {
  const storedValue = window.localStorage.getItem(key);
  const item = storedValue ? JSON.parse(storedValue) : initialValue;
  const [state, setState] = useState(item);
  const updateState = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, updateState];
}
export default function App() {
  const [dark, setDark] = useLocalState("theme", true);
  const [selectedCurrency, setSelectedCurrency] = useLocalState("currency", {
    value: "usd",
    symbol: "$",
  });
  const toggleTheme = () => {
    setDark(!dark);
  };
  const handleCurrency = (selectedCurrency) => {
    setSelectedCurrency(currencies[selectedCurrency]);
  };
  const theme = dark ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar
          toggleTheme={toggleTheme}
          handleCurrency={handleCurrency}
          selectedCurrency={selectedCurrency}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <HomePage {...props} selectedCurrency={selectedCurrency} />
            )}
          />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            exact
            path="/coinpage/:id"
            component={(props) => (
              <CoinPage {...props} selectedCurrency={selectedCurrency} />
            )}
          />
          j
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
