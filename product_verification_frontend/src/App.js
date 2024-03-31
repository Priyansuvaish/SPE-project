import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import GetStarted from "./components/getStarted";
import { useState } from 'react';
import DistributorForm from './components/DistributorForm';
import Authenticate from './components/Authenticate';


function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [wallet, setWallet] = useState("Please Connect Your Wallet to Proceed");
  const [contract, setContract] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/vendor" element={<GetStarted contract={contract} account={currentAccount}/>}></Route>

          <Route path="/distributorform" element={ <DistributorForm contract={contract} account={currentAccount} />}></Route>

          <Route path="/authenticate" element={<Authenticate contract={contract} account={currentAccount}/>}/></Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
