import React from "react";
import Login from "./Components/login/login";
import "./App.css";
import { ethers } from "ethers";
import Web3Provider from "./network";
import NavBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import MenuItems from "./NavBar/MenuItems";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03fff6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9e9e9e",
      contrastText: "#ffffff",
    }, 
  },
});

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

const App = () => {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
     <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <Web3Provider
            render={(network) => (
              <div>
                <NavBar />
                <Route exact path="/QuantaVerse-Uniswap-Interface/">
                  <CoinSwapper network={network} />
                </Route>

                <Route exact path="/QuantaVerse-Uniswap-Interface/liquidity">
                  <Liquidity network={network} />
                </Route>
                <Route 
                  exact path="/QuantaVerse-Uniswap-Interface/Verify-id"
                  component={() => {window.open('https://app.fractal.id/authorize?client_id=4pVYR9NMGa1HE198Fe3VFS0IM5N2CrKCsrYO74Eg4uU&redirect_uri=https%3A%2F%2Fda-fi.io%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread')
                  }}>
               </Route>
              </div>
            )}
          ></Web3Provider>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  </div>
  );
};

export default App;
