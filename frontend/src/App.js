import React, { useEffect, useState } from "react";
import VendorForm from "./components/VendorForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DistributorForm from "./components/DistributorForm";
import Home from "./components/Home";

import Products from "./components/TrackProducts";
import Distributors from "./components/Distributors";

import SideBar from "./components/SideBar";

import Authenticate from "./components/Authenticate";
import GetStarted from "./components/getStarted";

import './App.css';

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [wallet, setWallet] = useState("Please Connect Your Wallet to Proceed");

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route
            path="/vendor"
            element={<SideBar contract={contract} account={currentAccount} />}
          ></Route> */}
          <Route
            path="/vendor"
            element={
              <GetStarted contract={contract} account={currentAccount} />
            }
          >
            <Route
              path="products"
              element={
                <Products contract={contract} account={currentAccount} />
              }
            ></Route>
            <Route
              path="addproduct"
              element={
                <VendorForm contract={contract} account={currentAccount} />
              }
            />
            <Route
              path="available-distributors"
              element={
                <Distributors contract={contract} account={currentAccount} />
              }
            />
          </Route>
          <Route
            path="/distributorform"
            element={
              <DistributorForm contract={contract} account={currentAccount} />
            }
          ></Route>
          {/* <Route
            path="/vendor/products"
            element={
              <Products contract={contract} account={currentAccount} />
            }
          ></Route>
          <Route
            path="/vendor/addproduct"
            element={
              <VendorForm contract={contract} account={currentAccount} />
            }
          />
          <Route
            path="/vendor/available-distributors"
            element={
              <Distributors contract={contract} account={currentAccount} />
            }
          /> */}
          <Route
            path="/authenticate"
            element={
              <Authenticate contract={contract} account={currentAccount} />
            }
          />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
