
const {Web3} = require("web3");

<<<<<<< HEAD
const hardhatNetworkURL = "http://192.168.167.12:7556";
=======
const hardhatNetworkURL = "http://localhost:8545";
>>>>>>> 6eb910aa (updated-eth-back)

const web3Network = "gtr";
const web3 = new Web3(hardhatNetworkURL);

console.log("hi");

// async function getAccountsAsync() {
//   try {
//     const accounts = await web3.eth.getAccounts();
//     console.log("All accounts:", accounts);
//   } catch (error) {
//     console.error("Error fetching accounts:", error);
//   }
// }

// getAccountsAsync();

// web3.eth.getAccounts()
//   .then(accounts => {
//     console.log("All accounts:", accounts);
//   })
//   .catch(error => {
//     console.error("Error fetching accounts:", error);
//   });

module.exports = {
  web3,
  web3Network
};
