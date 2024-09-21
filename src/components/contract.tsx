// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';

// // Replace with your contract's ABI and address
// const contractABI: ethers.Interface | ethers.InterfaceAbi = [
//   // ABI of the contract
// ];
// const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// const SmartContractComponent: React.FC = () => {
//   const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
//   const [contract, setContract] = useState<ethers.Contract | null>(null);
//   const [account, setAccount] = useState<string | null>(null);
//   const [balance, setBalance] = useState<string | null>(null);

//   useEffect(() => {
//     const init = async () => {
//       // Check if MetaMask is installed
//       if (window.ethereum) {
//         const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
//         setProvider(web3Provider);

//         // Request account access
//         await window.ethereum.request({ method: 'eth_requestAccounts' });

//         const signer = web3Provider.getSigner();
//         const userAccount = await signer.getAddress();
//         setAccount(userAccount);

//         const userBalance = await web3Provider.getBalance(userAccount);
//         setBalance(ethers.utils.formatEther(userBalance));

//         // Create a contract instance
//         const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
//         setContract(contractInstance);
//       } else {
//         console.error('MetaMask is not installed');
//       }
//     };

//     init();
//   }, []);

//   const callContractFunction = async () => {
//     if (contract) {
//       try {
//         const result = await contract.someFunction(); // Replace with your contract function
//         console.log(result);
//       } catch (error) {
//         console.error('Error calling contract function:', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Smart Contract Integration</h1>
//       {account && <p>Account: {account}</p>}
//       {balance && <p>Balance: {balance} ETH</p>}
//       <button onClick={callContractFunction}>Call Contract Function</button>
//     </div>
//   );
// };

// export default SmartContractComponent;