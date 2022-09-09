import React from "react";
import Login from "./Components/login/login";
import "./App.css";
import { ethers } from "ethers";
import Web3Provider from "./network";
import NavBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route, Redirect, Link } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import MenuItems from "./NavBar/MenuItems";
import { createTheme, ThemeProvider } from "@material-ui/core";
import useToken from './Components/useToken';

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



const App = () => {
  const { token, setToken } = useToken();

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
                <Route>
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
