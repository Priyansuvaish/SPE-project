import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import GetStarted from "./components/getStarted";
import { useState,useEffect } from 'react';
import DistributorForm from './components/DistributorForm';
import Authenticate from './components/Authenticate';
import AssetTracker from "./utils/AssetTracker.json";


const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADD;
const { ethers } = require("ethers");


function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [wallet, setWallet] = useState("Please Connect Your Wallet to Proceed");
  const [contract, setContract] = useState(null);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];

      console.log("Found an authorized account:", account);
      setWallet("Connected");

      setCurrentAccount(account);

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        AssetTracker.abi,
        signer
      );
      console.log("contract", contract);
      setContract(contract);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);

      setWallet("Connected");

      setCurrentAccount(accounts[0]);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        AssetTracker.abi,
        signer
      );
      setContract(contract);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home account={currentAccount} />}></Route>

          <Route path="/vendor" element={<GetStarted contract={contract} account={currentAccount}/>}></Route>

          <Route path="/distributorform" element={ <DistributorForm contract={contract} account={currentAccount} />}></Route>

          <Route path="/authenticate" element={<Authenticate contract={contract} account={currentAccount}/>}/></Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
