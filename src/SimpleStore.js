
// import React, { useState } from "react";
// // import { ethers } from "ethers";
// import { Web3Provider } from '@ethersproject/providers';
// import { Contract } from 'ethers';

// const SimpleStore = ({ contractAddress="0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47", abi }) => {
//   const [data, setData] = useState(""); // State for input data
//   const [retrievedData, setRetrievedData] = useState(""); // State for retrieved data

//   // const handleStore = async () => {
//   //   try {
//   //     if (!window.ethereum) {
//   //       alert("Please install MetaMask!");
//   //       return;
//   //     }
//   //     await window.ethereum.request({ method: "eth_requestAccounts" });
  
//   //     const provider = new Web3Provider(window.ethereum);
//   //     const signer = await provider.getSigner();
  
//   //     console.log("Signer Address:", await signer.getAddress());
  
//   //     const contract = new Contract(contractAddress, abi, signer);
//   //     console.log("Contract ABI:", abi);
  
//   //     // Ensure that the setHealthData function exists in the contract
//   //     if (typeof contract.setHealthData !== "function") {
//   //       console.error("setHealthData function not found in contract");
//   //       return;
//   //     }


//   //     if (!data || typeof data !== "string") {
//   //       console.error("Invalid data format. Expected a non-empty string.");
//   //       return;
//   //     }
  
//   //     console.log("Storing data:", data);
//   //     const tx = await contract.setHealthData(data);
//   //     console.log("Transaction hash:", tx.hash);
//   //     await tx.wait();
//   //     alert("Data stored successfully!");
//   //   } catch (error) {
//   //     console.error("Error storing data:", error.message || error);
//   //   }
//   // };

//   const handleStore = async () => {
//     try {
//       if (!window.ethereum) {
//         alert("Please install MetaMask!");
//         return;
//       }
  
//       await window.ethereum.request({ method: "eth_requestAccounts" });
  
//       const provider = new Web3Provider(window.ethereum);
//       const signer = await provider.getSigner();
  
//       console.log("Signer Address:", await signer.getAddress());
  
//       if (!abi || !Array.isArray(abi)) {
//         console.error("Invalid ABI:", abi);
//         return;
//       }
  
//       const contract = new Contract(contractAddress, abi, signer);
  
//       if (typeof contract.setHealthData !== "function") {
//         console.error("setHealthData function not found in contract");
//         return;
//       }
  
//       if (!data || typeof data !== "string") {
//         console.error("Invalid data format. Expected a non-empty string.");
//         return;
//       }
  
//       console.log("Storing data:", data);
//       const tx = await contract.setHealthData(data);
//       console.log("Transaction hash:", tx.hash);
//       await tx.wait();
//       alert("Data stored successfully!");
//     } catch (error) {
//       console.error("Error storing data:", error.message || error, error.stack);
//     }
//   };

  
//   const handleRetrieve = async () => {
//     try {
//       if (!window.ethereum) {
//         alert("Please install MetaMask!");
//         return;
//       }
//       await window.ethereum.request({ method: "eth_requestAccounts" });
  
//       const provider = new Web3Provider(window.ethereum);
//       const signer = await provider.getSigner();
  
//       console.log("Signer Address:", await signer.getAddress());
  
//       const contract = new Contract(contractAddress, abi, signer);
  
//       // Ensure that the getHealthData function exists in the contract
//       if (typeof contract.getHealthData !== "function") {
//         console.error("getHealthData function not found in contract");
//         return;
//       }
  
//       console.log("Retrieving data...");
//       const result = await contract.getHealthData();
//       console.log("Retrieved data:", result);
//       setRetrievedData(result);
//     } catch (error) {
//       console.error("Error retrieving data:", error.message || error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Simple Health Data Store</h1>

//       {/* Input for health data */}
//       <input
//         type="text"
//         value={data}
//         onChange={(e) => setData(e.target.value)}
//         placeholder="Enter health data"
//         style={{
//           padding: "10px",
//           marginBottom: "10px",
//           width: "300px",
//           fontSize: "16px",
//         }}
//       />

//       {/* Store Data Button */}
//       <button
//         onClick={handleStore}
//         style={{
//           margin: "5px",
//           padding: "10px 20px",
//           backgroundColor: "blue",
//           color: "white",
//           fontSize: "16px",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Store Data
//       </button>

//       {/* Retrieve Data Button */}
//       <button
//         onClick={handleRetrieve}
//         style={{
//           margin: "5px",
//           padding: "10px 20px",
//           backgroundColor: "green",
//           color: "white",
//           fontSize: "16px",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Retrieve Data
//       </button>

//       {/* Display Retrieved Data */}
//       <div style={{ marginTop: "20px" }}>
//         <h3>Retrieved Data:</h3>
//         <p
//           style={{
//             padding: "10px",
//             backgroundColor: "#f4f4f4",
//             border: "1px solid #ccc",
//             width: "300px",
//             wordWrap: "break-word",
//           }}
//         >
//           {retrievedData || "No data retrieved yet."}
//         </p>
//       </div>
//     </div>
//   );
// };  

// export default SimpleStore;

import React, { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers"; // Updated imports
import contractABI from "./abi/SimpleStorage.json";

const contractAddress = "0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47";

const SimpleStore = () => {
  const [storedData, setStoredData] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Function to fetch stored data
  const fetchData = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum); // Updated provider
      const contract = new Contract(contractAddress, contractABI.abi, provider);

      const data = await contract.get();
      setStoredData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to set new data
  const setData = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum); // Updated provider
      const signer = await provider.getSigner(); // Updated signer
      const contract = new Contract(contractAddress, contractABI.abi, signer);

      const tx = await contract.set(inputValue);
      await tx.wait(); // Wait for transaction to complete

      console.log("Transaction successful:", tx);
      fetchData(); // Refresh stored data
    } catch (error) {
      console.error("Error setting data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Simple Storage</h1>
      <p>Stored Data: {storedData}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={setData}>Set Data</button>
    </div>
  );
};

export default SimpleStore;
