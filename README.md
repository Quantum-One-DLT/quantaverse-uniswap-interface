
# NOTE: This is a proof-of-concept and in active development. Use it at your own risk - it's not intended for production use as of yet. 
=======================================================================================================================================

# QuantaVerse (testnet) <> Uniswap Liquidity Pools including our DA-FI/ETH v2 pool here 

  https://app.uniswap.org/#/add/v2/ETH/0xeaad65885fea47a3b1258935f4ce83aab06fdd3a
  ===============================================================================
  
# Added Interface Functionality
  -------------
> -  Complete ID/KYC Verification (for new, unverified users)  
> - KYC Verifier (for existing users who previously completed KYC) 
> - Contracts deployed on an EVM blockchain. 
> - Web2 login overlay exists for Qrypt BLAST algorithm based post quantum secure user auth testing 
> - Web3-Provider will not attempt connection until successful login - (incredibly simplified at this juncture). 
> - KYC DID Credentialing also interoperable with Algorand, Cardano, Solana, Polkadot, Fractal.ID Polkadot Parachain

# Web2 Login Notice
  -----------------
  At the moment, you must create a server.js file saved in the root of project directory. The file name is set for .gitignore. Copy and paste code below  
  into server.js file. Once you the app is running after yarn start, run server.js.
  
``  
      const express = require('express');
      const cors = require('cors')
      const app = express();
   
      app.use(cors());
   
      app.use('/login', (req, res) => {
        res.send({
          token: 'test123'
        });
      });
 ``
   app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
   
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back**
