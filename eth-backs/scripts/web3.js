
const {Web3} = require("web3");

const hardhatNetworkURL = "http://192.168.167.12:7556";

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
