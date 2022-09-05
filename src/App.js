import React from "react";
import "./App.css";
import { ethers } from "ethers";
import Web3Provider from "./network";
import NarBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import { VerifyID } from "./NavBar/MenuItems";
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

const App = () => {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <Web3Provider
            render={(network) => (
              <div>
                <NarBar />
                <Route exact path="/QuantaVerse-Uniswap-Interface/">
                  <CoinSwapper network={network} />
                </Route>

                <Route exact path="/QuantaVerse-Uniswap-Interface/liquidity">
                  <Liquidity network={network} />
                </Route>
                <Route 
                  exact path="/QuantaVerse-Uniswap-Interface/verify-id"
                  component={() => { window.location.replace('https://quantumone.network');
                  return null;
                  }}>
                  <VerifyID network={network} />
               </Route>
              </div>
            )}
          ></Web3Provider>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
};

export default App;
